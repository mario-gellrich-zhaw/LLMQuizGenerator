from flask import jsonify


def save_quiz(conn, cursor, title, questions):
    # Insert the new quiz title into the quizzes table
    cursor.execute("INSERT INTO quizzes (title) VALUES (?)", (title,))
    quiz_id = cursor.lastrowid  # Get the quiz_id of the inserted quiz

    # Prepare a list to store the inserted questions
    inserted_questions = []

    # Insert each question into the questions table
    for question_data in questions:
        # Validate each question
        if not all(k in question_data for k in ["question", "answer", "topic"]):
            raise ValueError("Invalid question format. Each question must have 'question', 'answer', and 'topic'.")

        question = question_data["question"]
        code = question_data.get("code", None)
        image_url = question_data.get("image_url", None)  # Optional image URL
        answer = question_data["answer"]
        topic = question_data["topic"]

        # Insert the question into the questions table, linking to the quiz
        cursor.execute(
            """
            INSERT INTO questions (quiz_id, question, code, image_url, answer, topic)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (quiz_id, question, code, image_url, answer, topic),
        )
        question_id = cursor.lastrowid  # Get the question_id of the inserted question

        # Insert each option into the options table, linking to the question
        options = question_data.get("options", [])
        inserted_options = []
        for option_text in options:
            cursor.execute(
                """
                INSERT INTO options (question_id, option_text)
                VALUES (?, ?)
                """,
                (question_id, option_text),
            )
            inserted_options.append(option_text)

        # Append the inserted question to the list
        inserted_questions.append(
            {
                "question_id": question_id,
                "question": question,
                "code": code,
                "image_url": image_url,
                "answer": answer,
                "topic": topic,
                "options": inserted_options,
            }
        )

    # Commit the transaction
    conn.commit()

    # Construct the full quiz object
    full_quiz = {"quiz_id": quiz_id, "title": title, "questions": inserted_questions}
    return full_quiz



def add_one_class(class_name, conn, cursor):
    try:
        # Insert the new class into the database
        cursor.execute(
            """
            INSERT INTO classes (class_name)
            VALUES (?)
            """,
            (class_name,),
        )

        # Fetch the last inserted class_id (SQLite's lastrowid)
        class_id = cursor.lastrowid

        # Commit the transaction
        conn.commit()

        # Close the cursor and connection
        cursor.close()
        conn.close()

        if class_id:
            class_data = {
                "class_id": class_id,  # id
                "class_name": class_name,  # class_name
                "users": [],
                "quizzes": [],
            }
            return class_data

    except Exception as e:
        print(f"Error adding class: {e}")
        raise Exception("Error saving class to the database.")



def add_quiz_to_class_by_class_id(cursor, class_id, quiz_id):
    try:
        # Insert the quiz into the class_quizzes table
        cursor.execute(
            """
            INSERT INTO class_quizzes (class_id, quiz_id)
            VALUES (?, ?)
            ON CONFLICT (class_id, quiz_id) DO NOTHING
            """,
            (class_id, quiz_id),
        )
        cursor.connection.commit()

        # Check if the insertion was successful
        return cursor.rowcount > 0

    except Exception as e:
        print(f"Error inserting quiz into class_quizzes table: {e}")
        return False
