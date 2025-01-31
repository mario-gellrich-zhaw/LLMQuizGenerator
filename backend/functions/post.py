from flask import jsonify


def save_quiz(conn, cursor, title, questions):
    cursor.execute("INSERT INTO quizzes (title) VALUES (?)", (title,))
    # Get the quiz_id of the inserted quiz, needed in frontend later
    quiz_id = cursor.lastrowid  

    inserted_questions = []

    for question_data in questions:
        if not all(k in question_data for k in ["question", "answer", "topic"]):
            raise ValueError("Invalid question format. Each question must have 'question', 'answer', and 'topic'.")

        question = question_data["question"]
        code = question_data.get("code", None)
        image_url = question_data.get("image_url", None) 
        answer = question_data["answer"]
        topic = question_data["topic"]

        cursor.execute(
            """
            INSERT INTO questions (quiz_id, question, code, image_url, answer, topic)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (quiz_id, question, code, image_url, answer, topic),
        )
        question_id = cursor.lastrowid  # Get the question_id of the inserted question, needed in frontend

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

    conn.commit()

    # Construct the full quiz object
    full_quiz = {"quiz_id": quiz_id, "title": title, "questions": inserted_questions}
    return full_quiz



def add_one_class(class_name, conn, cursor):
    try:
        cursor.execute(
            """
            INSERT INTO classes (class_name)
            VALUES (?)
            """,
            (class_name,),
        )

        class_id = cursor.lastrowid

        conn.commit()

        cursor.close()
        conn.close()

        if class_id:
            class_data = {
                "class_id": class_id,  
                "class_name": class_name, 
                "users": [],
                "quizzes": [],
            }
            return class_data

    except Exception as e:
        print(f"Error adding class: {e}")
        raise Exception("Error saving class to the database.")



def add_quiz_to_class_by_class_id(cursor, class_id, quiz_id):
    try:
        cursor.execute(
            """
            INSERT INTO class_quizzes (class_id, quiz_id)
            VALUES (?, ?)
            ON CONFLICT (class_id, quiz_id) DO NOTHING
            """,
            (class_id, quiz_id),
        )
        cursor.connection.commit()

        return cursor.rowcount > 0

    except Exception as e:
        print(f"Error inserting quiz into class_quizzes table: {e}")
        return False