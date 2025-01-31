import os
from flask import jsonify
from decimal import Decimal
from datetime import datetime

def return_all_quizzes(conn, cursor):
    try:
        # Query to get all quizzes with questions, options, and the published status
        cursor.execute(
            """
            SELECT q.quiz_id, q.title, q.published, que.question_id, que.question, que.answer, que.topic, que.image_url,que.code,
                   opt.option_id, opt.option_text
            FROM quizzes q
            JOIN questions que ON q.quiz_id = que.quiz_id
            LEFT JOIN options opt ON que.question_id = opt.question_id
        """
        )

        # Fetch all results
        rows = cursor.fetchall()

        # Process the results into a structured JSON format
        quizzes = []
        for row in rows:
            # Find the quiz by ID
            quiz = next(
                (quiz for quiz in quizzes if quiz["quiz_id"] == row["quiz_id"]), None
            )
            if not quiz:
                quiz = {
                    "quiz_id": row["quiz_id"],
                    "title": row["title"],
                    "published": row["published"],  # Include published field
                    "questions": [],
                }
                quizzes.append(quiz)

            # Find or create the question
            question = next(
                (
                    q
                    for q in quiz["questions"]
                    if q["question_id"] == row["question_id"]
                ),
                None,
            )
            if not question:
                question = {
                    "question_id": row["question_id"],
                    "question": row["question"],
                    "answer": row["answer"],
                    "topic": row["topic"],
                    "image_url": row["image_url"],
                    "options": [],
                    "code": row["code"],
                }
                quiz["questions"].append(question)

            # Add the option to the question
            if row["option_text"]:
                option = {"option_id": row["option_id"], "option": row["option_text"]}
                question["options"].append(option)

            # If image_url is not empty, check if the image exists
            if question["image_url"]:
                image_path = os.path.join("uploaded_images", question["image_url"])
                if os.path.exists(image_path):
                    # Optionally, add the full path or URL to the image if it exists
                    question["image_url"] = f"/uploaded_images/{question['image_url']}"

        # Close the cursor and connection
        cursor.close()
        conn.close()

        # Return the structured data as JSON
        return quizzes

    except Exception as e:
        # If there's an error, return the error message in the response 13,37
        return e


def return_all_quizzes_for_run(conn, cursor, class_id):
    try:
        # Query to get all quizzes assigned to the class, along with their details
        cursor.execute(
            """
            SELECT q.quiz_id, q.title, q.published, que.question_id, que.question, que.topic, que.image_url, que.code,
                   opt.option_id, opt.option_text
            FROM quizzes q
            JOIN class_quizzes cq ON q.quiz_id = cq.quiz_id
            JOIN questions que ON q.quiz_id = que.quiz_id
            LEFT JOIN options opt ON que.question_id = opt.question_id
            WHERE cq.class_id = ?
            and q.published = 1
            """,
            (class_id,),
        )

        # Fetch all results
        rows = cursor.fetchall()

        # Process the results into a structured JSON format
        quizzes = []
        for row in rows:
            # Find the quiz by ID
            quiz = next(
                (quiz for quiz in quizzes if quiz["quiz_id"] == row["quiz_id"]), None
            )
            if not quiz:
                quiz = {
                    "quiz_id": row["quiz_id"],
                    "title": row["title"],
                    "published": row["published"],  # Include published field
                    "questions": [],
                }
                quizzes.append(quiz)

            # Find or create the question
            question = next(
                (
                    q
                    for q in quiz["questions"]
                    if q["question_id"] == row["question_id"]
                ),
                None,
            )
            if not question:
                question = {
                    "question_id": row["question_id"],
                    "question": row["question"],
                    "topic": row["topic"],
                    "image_url": row["image_url"],
                    "options": [],
                    "code": row["code"],
                }
                quiz["questions"].append(question)

            # Add the option to the question
            if row["option_text"]:
                option = {"option_id": row["option_id"], "option": row["option_text"]}
                question["options"].append(option)

            # If image_url is not empty, check if the image exists
            if question["image_url"]:
                image_path = os.path.join("uploaded_images", question["image_url"])
                if os.path.exists(image_path):
                    # Optionally, add the full path or URL to the image if it exists
                    question["image_url"] = f"/uploaded_images/{question['image_url']}"

        # Close the cursor and connection
        cursor.close()
        conn.close()

        # Return the structured data as JSON
        return quizzes

    except Exception as e:
        # If there's an error, return the error message in the response
        return e


def return_all_classes(conn, cursor):
    try:
        # Query to get all classes, their users, and their quizzes
        cursor.execute(
            """
            SELECT 
                c.id AS class_id, 
                c.class_name, 
                u.id AS user_id, 
                u.username,
                q.quiz_id AS quiz_id,
                q.title AS quiz_title
            FROM classes c
            LEFT JOIN users u ON u.class_id = c.id
            LEFT JOIN class_quizzes cq ON cq.class_id = c.id
            LEFT JOIN quizzes q ON q.quiz_id = cq.quiz_id
            """
        )
        rows = cursor.fetchall()

        # Process the class data into a structured JSON format
        classes = []
        for row in rows:
            # Find the class in the list
            class_item = next(
                (c for c in classes if c["class_id"] == row["class_id"]), None
            )
            if not class_item:
                # If the class is not already in the list, add it
                class_item = {
                    "class_id": row["class_id"],
                    "class_name": row["class_name"],
                    "users": [],
                    "quizzes": [],
                }
                classes.append(class_item)

            # Add the user to the class's user list
            if row["user_id"]:
                user = {
                    "user_id": row["user_id"],
                    "username": row["username"],
                }
                if user not in class_item["users"]:
                    class_item["users"].append(user)

            # Add the quiz to the class's quiz list
            if row["quiz_id"]:
                quiz = {
                    "quiz_id": row["quiz_id"],
                    "title": row["quiz_title"],
                }
                if quiz not in class_item["quizzes"]:
                    class_item["quizzes"].append(quiz)

        # Close the cursor and connection
        cursor.close()
        conn.close()

        # Return the structured data
        return classes

    except Exception as e:
        # If there's an error, return the error message in the response
        return {"error": str(e)}


def get_users_not_in_class(class_id, conn, cursor):
    try:
        # SQL query to fetch users not associated with the given class ID
        query = """
        SELECT u.id, u.username
        FROM users u
        WHERE (u.class_id != ? OR u.class_id IS NULL) AND u.role <> 1;
        """

        cursor.execute(query, (class_id,))
        users = cursor.fetchall()

        # If no users are found, return a message indicating that
        if not users:
            return (
                jsonify({"message": "No users found that are not in the class."}),
                200,
            )

        # Format the result as a list of dictionaries with only id and username
        users_list = [{"id": user[0], "username": user[1]} for user in users]

        return jsonify({"users": users_list}), 200
    except Exception as e:
        print(f"Error in get_users_not_in_class: {e}")
        return jsonify({"error": "An error occurred while fetching users."}), 500


def get_users(cursor):
    try:
        # SQL query to fetch users not associated with the given class ID
        query = """
        SELECT u.id, u.username, u.role
        FROM users u;
        """

        cursor.execute(query)
        users = cursor.fetchall()

        # If no users are found, return a message indicating that
        if not users:
            return (
                jsonify({"message": "No users found"}),
                200,
            )

        # Format the result as a list of dictionaries with only id and username
        users_list = [
            {"id": user[0], "username": user[1], "role": user[2]} for user in users
        ]

        return jsonify({"users": users_list}), 200
    except Exception as e:
        print(f"Error in get_users_not_in_class: {e}")
        return jsonify({"error": "An error occurred while fetching users."}), 500


def get_quizzes_not_in_class_by_class_id(cursor, class_id):
    # SQL query to find all quizzes that are not associated with the given class_id
    cursor.execute(
        """
        SELECT quiz_id, title
        FROM quizzes
        WHERE quiz_id NOT IN (
            SELECT quiz_id
            FROM class_quizzes
            WHERE class_id = ?
        )
    """,
        (class_id,),
    )

    quizzes = cursor.fetchall()

    if quizzes:
        # Return quizzes that do not belong to the class (quiz_id and title)
        return (
            jsonify(
                {
                    "quizzes": [
                        {"quiz_id": quiz[0], "title": quiz[1]} for quiz in quizzes
                    ]
                }
            ),
            200,
        )
    else:
        return jsonify({"message": "No quizzes available."}), 404


def fetch_answer_data(cursor, quiz_id):
    try:
        # Define the SQL query
        sql_query = """
        SELECT 
            q.question_id,
            q.question,
            q.answer,
            o.option_id,
            o.option_text
        FROM 
            questions q
        LEFT JOIN 
            options o
        ON 
            q.question_id = o.question_id
        AND 
            q.answer = o.option_text
        WHERE 
            q.quiz_id = ?
        """

        # Execute the query with the provided quiz_id
        cursor.execute(sql_query, (quiz_id,))

        # Fetch all the results
        results = cursor.fetchall()

        # Return the results
        return results
    except Exception as e:
        print(f"Error fetching quiz data: {e}")
        return None


def get_history(cursor, user_id):
    # Fetch all the quiz history for the user
    result_query = """
        SELECT 
            qr.run_id,
            qr.created_at,
            qr.correct_percentage,
            qr.quiz_id,
            q.title,
            qd.question_id,
            qe.question,
            qd.input_option_id,
            qd.input_option_text,
            qd.answer_option_id,
            qd.answer_option_text
        FROM 
            quiz_results qr
        INNER JOIN 
            quizzes q ON qr.quiz_id = q.quiz_id
        INNER JOIN 
            quiz_run_details qd ON qr.run_id = qd.run_id
        INNER JOIN 
            questions qe ON qd.question_id = qe.question_id
        WHERE 
            qr.user_id = ?
        ORDER BY 
            qr.created_at DESC
        """
    cursor.execute(result_query, (user_id,))
    rows = cursor.fetchall()

    if not rows:
        result = []
        return result

    # Process the data into the required format
    history = {}
    for row in rows:
        (
            run_id,
            created_at,
            correct_percentage,
            quiz_id,
            quiz_title,
            question_id,
            question_text,
            input_option_id,
            input_option_text,
            answer_option_id,
            answer_option_text,
        ) = row

        dt_object = datetime.strptime(created_at, "%Y-%m-%d %H:%M:%S.%f")

        # Create a run entry if it doesn't exist
        if run_id not in history:
            history[run_id] = {
                "RunID": run_id,
                "created_at": dt_object.strftime("%Y-%m-%d"),
                "correct_answers": correct_percentage,
                "quiz_id": quiz_id,
                "quiz_title": quiz_title,
                "Answers": [],
            }

        # Determine if the answer was correct
        is_correct = input_option_id == answer_option_id

        # Add the question details
        history[run_id]["Answers"].append(
            {
                "correct": is_correct,
                "option_id_from_backend": answer_option_id,
                "option_id_from_frontend": input_option_id,
                "option_text_from_backend": answer_option_text,
                "option_text_from_frontend": input_option_text,
                "question_id": question_id,
                "question_text": question_text,
            }
        )

        result = list(history.values())
    return result


def get_quiz_results(cursor, from_date, to_date, class_id, quiz_id):
    try:
        # Define the SQL query
        sql_query = """
        select 
            q.title, 
            qr.correct_percentage,
            qr.run_id,
            count(qs.question_id) + 1 as steps
        from quiz_results qr
            inner join quizzes q on qr.quiz_id = q.quiz_id
            inner join classes c on qr.class_id = c.id
            inner join questions qs on qr.quiz_id = qs.quiz_id
        where 
            qr.created_at between ? and ?
            and qr.class_id = ?
            and qr.quiz_id = ?
        group by 
                q.title,
                qr.correct_percentage,
                qr.run_id
        """

        # Execute the query with the provided quiz_id
        cursor.execute(sql_query, (from_date, to_date, class_id, quiz_id))

        # Fetch all the results
        rows = cursor.fetchall()

        chart_data = {"label": None, "data": [], "labels": None, "Status": True}

        # Check if rows are empty
        if not rows:
            return {"Status": False}

        # Iterate over the rows and calculate step counts
        for row in rows:
            title, correct_percentage, run_id, steps = row

            if chart_data["label"] is None:
                chart_data["label"] = title

            if chart_data["labels"] is None:
                chart_data["labels"] = [
                    round(i * 100 / (steps - 1), 2) for i in range(steps)
                ]
                chart_data["data"] = [0 for i in range(steps)]

            step_value = float(round(100 / (steps - 1), 0))
            idx = int(round(correct_percentage / step_value, 0))
            chart_data["data"][idx] += 1

        # chart_data["data"] = step_counts
        return chart_data
    except Exception as e:
        print(f"Error fetching history data: {e}")
        return None


def get_quiz_results_base(cursor):
    try:
        # Define the SQL query
        sql_query = """
        select 
            c.class_name,
            c.id,
            q.title,
            q.quiz_id
        from quiz_results qr
            inner join quizzes q on qr.quiz_id = q.quiz_id
            inner join classes c on qr.class_id = c.id
        group by 
            c.class_name,
            q.title, c.id, q.quiz_id
        order by c.class_name, q.title, c.id, q.quiz_id DESC
        """

        # Execute the query
        cursor.execute(sql_query)

        # Fetch all the results
        rows = cursor.fetchall()

        if not rows:
            return {"classes": []}

        # Process the data into the required format
        base_data = {"classes": []}

        # Loop through rows and populate classes and their quizzes
        for class_name, class_id, quiz_title, quiz_id in rows:
            # Find or add the class
            class_entry = next(
                (cls for cls in base_data["classes"] if cls["value"] == class_id),
                None,
            )
            if not class_entry:
                class_entry = {"title": class_name, "value": class_id, "quizzes": []}
                base_data["classes"].append(class_entry)

            # Add quiz to the current class if not already present
            if not any(quiz["value"] == quiz_id for quiz in class_entry["quizzes"]):
                class_entry["quizzes"].append({"title": quiz_title, "value": quiz_id})

        return base_data
    except Exception as e:
        print(f"Error fetching history data: {e}")
        return None
