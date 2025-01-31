from flask import jsonify


def update_entire_quiz(quiz_id, conn, cursor, title, questions):
    try:
        conn.begin()

        cursor.execute(
            """
            UPDATE quizzes
            SET title = ?
            WHERE quiz_id = ?;
            """,
            (title, quiz_id),
        )

        cursor.execute(
            """SELECT question_id FROM questions WHERE quiz_id = ?;""", (quiz_id,)
        )
        existing_questions = {row[0] for row in cursor.fetchall()}

        incoming_question_ids = []

        for question_data in questions:
            if not all(k in question_data for k in ["question", "answer", "topic"]):
                return (
                    jsonify(
                        {
                            "error": "Invalid question format. Each question must have 'question', 'answer', and 'topic'."
                        }
                    ),
                    400,
                )

            question = question_data["question"]
            code = question_data.get("code", None)
            image_url = question_data.get("image_url", None) 
            answer = question_data["answer"]
            topic = question_data["topic"]
            question_id = question_data.get("question_id", None)

            # If the question has an existing ID, update it
            if question_id:
                cursor.execute(
                    """UPDATE questions
                       SET question = ?, code = ?, image_url = ?, answer = ?, topic = ?
                       WHERE question_id = ? AND quiz_id = ?;""",
                    (question, code, image_url, answer, topic, question_id, quiz_id),
                )
                incoming_question_ids.append(question_id)
            else:
                # Insert a new question and get its ID
                cursor.execute(
                    """INSERT INTO questions (quiz_id, question, code, image_url, answer, topic)
                       VALUES (?, ?, ?, ?, ?, ?)""",
                    (quiz_id, question, code, image_url, answer, topic),
                )
                question_id = cursor.lastrowid  # Retrieve the inserted question ID
                incoming_question_ids.append(question_id)

            options = question_data.get("options", [])

            # First, delete the existing options for this question
            cursor.execute(
                """DELETE FROM options WHERE question_id = ?;""", (question_id,)
            )

            # Now insert the new options
            for option in options:
                option_text = option.get("option") 
                option_id = option.get("option_id")  

                if option_id:
                    cursor.execute(
                        """INSERT INTO options (question_id, option_text, option_id)
                           VALUES (?, ?, ?);""",
                        (question_id, option_text, option_id),
                    )
                else:
                    if option_text: 
                        cursor.execute(
                            """INSERT INTO options (question_id, option_text)
                               VALUES (?, ?);""",
                            (question_id, option_text),
                        )

        # Delete any questions that are no longer part of the quiz
        questions_to_delete = existing_questions - set(incoming_question_ids)
        for question_id in questions_to_delete:
            cursor.execute(
                """DELETE FROM questions WHERE question_id = ? AND quiz_id = ?;""",
                (question_id, quiz_id),
            )
            cursor.execute(
                """DELETE FROM options WHERE question_id = ?;""", (question_id,)
            )

        conn.commit()

        return jsonify({"message": "Quiz updated successfully"}), 200

    except Exception as e:
        conn.rollback()
        print(f"Error updating quiz: {e}")
        return jsonify({"error": "An error occurred while updating the quiz."}), 500



def update_published_status(cursor, conn, quiz_id, data):
    # Update the quiz's published status, 0 = false, 1 = true
    cursor.execute(
        """
        UPDATE quizzes
        SET published = ?
        WHERE quiz_id = ?;
        """,
        (data["published"], quiz_id),
    )

    cursor.execute(
        """
        SELECT * FROM quizzes WHERE quiz_id = ?;
        """,
        (quiz_id,)
    )
    updated_row = cursor.fetchone()

    if updated_row is None:
        return None  # Returning None if quiz is not found or no update is made

    conn.commit()

    # Map the updated row to a dictionary for returning to the frontend
    updated_quiz = {
        "quiz_id": updated_row[0],
        "title": updated_row[1],
        "published": updated_row[2], 
    }

    cursor.close()
    conn.close()

    return updated_quiz 

def update_user_class(conn, cursor, class_id, user_id):
    query = """
        UPDATE users
        SET class_id = ?
        WHERE id = ?;
        """
    cursor.execute(query, (class_id, user_id))
    conn.commit()

    # Check if any rows were updated (user found and class_id assigned)
    if cursor.rowcount == 0:
        return jsonify({"error": "User not found"}), 404

    cursor.close()
    conn.close()
    return (
        jsonify({"message": f"User {user_id} successfully added to class {class_id}"}),
        200,
    )


def update_user(conn, cursor, new_role, user_id):
    cursor.execute(
        """
            UPDATE users
            SET role = ?
            WHERE id = ?
            """,
        (new_role, user_id),
    )
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "User role updated successfully"}), 200