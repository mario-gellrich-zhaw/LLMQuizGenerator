import os

UPLOAD_FOLDER = os.path.join(
    os.path.dirname(os.path.abspath(__file__)), "../upload_images"
)


def update_question_image_url(conn, question_id, image_url):
    try:
        cur = conn.cursor()
        cur.execute(
            "SELECT question_id FROM questions WHERE question_id = ?",
            (question_id,)
        )
        
        if cur.fetchone() is None:
            raise ValueError(f"Question with ID {question_id} does not exist.")
        
        # Update the image_url for the specified question
        cur.execute(
            "UPDATE questions SET image_url = ? WHERE question_id = ?",
            (image_url, question_id)
        )
        
        conn.commit()
        cur.close()
        
    except Exception as e:
        conn.rollback()
        cur.close()
        raise e



def delete_image(url):
    try:
        # Extracts 'example.jpg' from '/upload_images/example.jpg'
        filename = os.path.basename(
            url
        )  

        # Construct the full file path
        file_path = os.path.join(UPLOAD_FOLDER, filename)

        # Check if the file exists
        if os.path.exists(file_path):
            os.remove(file_path)
            return {"status": "success", "message": "Image deleted successfully"}
        else:
            return {"status": "error", "message": "File not found"}
    except Exception as e:
        return {
            "status": "error",
            "message": "An error occurred while attempting to delete the image",
            "details": str(e),
        }


def compare_and_calculate_answers(resultset, user_answers, quiz_id):
    """
    This function compares the answers from the frontend with the correct answers from the database.
    It returns an object containing the quiz_id, percentage of correct answers, and the answers with their correctness.
    """
    user_answers_map = {
        answer["question_id"]: {
            "option_id": answer["option_id"],
            "option_text": answer[
                "option_text"
            ],
        }
        for answer in user_answers
    }

    correct_answers = 0
    total_answers = len(user_answers)
    answers = []

    for result in resultset:
        question_id = result[0]
        question_text = result[1]
        correct_option_id = result[3]
        correct_option_text = result[
            4
        ]  

        # Get the user's answer and option text
        user_answer = user_answers_map.get(question_id)
        if not user_answer:
            continue 
        user_option_id = user_answer["option_id"]
        user_option_text = user_answer[
            "option_text"
        ]  

        is_correct = user_option_id == correct_option_id
        if is_correct:
            correct_answers += 1

        answer = {
            "question_id": question_id,
            "question_text": question_text,
            "option_id_from_frontend": user_option_id,
            "option_text_from_frontend": user_option_text,
            "option_id_from_backend": correct_option_id,
            "option_text_from_backend": correct_option_text,
            "correct": is_correct,
        }

        answers.append(answer)

    correct_percentage = round(correct_answers / total_answers * 100, 2)

    result = {
        "quiz_id": quiz_id,
        "correct_answers": correct_percentage,
        "Answers": answers,
    }

    return result


def save_quiz_result(cursor, quiz_id, user_id, class_id, correct_percentage):
    try:
        sql_query = """
        INSERT INTO quiz_results (quiz_id, user_id, class_id, correct_percentage)
        VALUES (?, ?, ?, ?);
        """

        cursor.execute(sql_query, (quiz_id, user_id, class_id, correct_percentage))

        # returning run_id for frontend, detailed quiz results
        run_id = cursor.lastrowid

        return run_id

    except Exception as e:
        print(f"Error saving quiz result: {e}")
        raise Exception("Error saving quiz result to the database.")



def save_quiz_run_details(cursor, run_id, quiz_id, user_id, answers):
    try:
        for answer in answers:
            question_id = answer["question_id"]
            input_option_id = answer["option_id_from_frontend"]
            input_option_text = answer["option_text_from_frontend"]
            answer_option_id = answer["option_id_from_backend"]
            answer_option_text = answer["option_text_from_backend"]

            sql_query = """
            INSERT INTO quiz_run_details 
            (run_id, quiz_id, user_id, question_id, input_option_id, input_option_text, 
             answer_option_id, answer_option_text)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """

            cursor.execute(
                sql_query,
                (
                    run_id,
                    quiz_id,
                    user_id,
                    question_id,
                    input_option_id,
                    input_option_text,
                    answer_option_id,
                    answer_option_text,
                ),
            )

    except Exception as e:
        print(f"Error saving quiz run details: {e}")
        raise