import os

UPLOAD_FOLDER = os.path.join(
    os.path.dirname(os.path.abspath(__file__)), "../upload_images"
)


def update_question_image_url(conn, question_id, image_url):
    try:
        # Create a cursor object manually
        cur = conn.cursor()

        # Check if the question exists
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
        
        # Commit the transaction after the update
        conn.commit()

        # Close the cursor manually
        cur.close()
        
    except Exception as e:
        # If any error occurs, rollback the transaction to maintain database integrity
        conn.rollback()
        
        # Close the cursor in case of an error as well
        cur.close()

        # Re-raise the error to handle it at a higher level
        raise e



def delete_image(url):
    try:
        # Extract the filename from the URL
        filename = os.path.basename(
            url
        )  # Extracts 'example.jpg' from '/upload_images/example.jpg'

        # Construct the full file path
        file_path = os.path.join(UPLOAD_FOLDER, filename)

        # Check if the file exists
        if os.path.exists(file_path):
            # Delete the file
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
    # Prepare the answers from the frontend
    user_answers_map = {
        answer["question_id"]: {
            "option_id": answer["option_id"],
            "option_text": answer[
                "option_text"
            ],  # Add the option_text from the frontend
        }
        for answer in user_answers
    }

    # Prepare the result object to store the answers and correctness
    correct_answers = 0
    total_answers = len(user_answers)
    answers = []

    # Iterate over the resultset and compare answers
    for result in resultset:
        question_id = result[0]
        question_text = result[1]
        correct_option_id = result[3]
        correct_option_text = result[
            4
        ]  # Can be used for debugging or more detailed info

        # Get the user's answer and option text
        user_answer = user_answers_map.get(question_id)
        if not user_answer:
            continue  # Skip if there's no answer from the user for this question
        user_option_id = user_answer["option_id"]
        user_option_text = user_answer[
            "option_text"
        ]  # Get the option text from frontend

        # Determine if the answer is correct
        is_correct = user_option_id == correct_option_id
        if is_correct:
            correct_answers += 1

        # Prepare the answer object
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

    # Calculate the percentage of correct answers
    correct_percentage = round(correct_answers / total_answers * 100, 2)

    # Prepare the response object
    result = {
        "quiz_id": quiz_id,
        "correct_answers": correct_percentage,
        "Answers": answers,
    }

    return result


def save_quiz_result(cursor, quiz_id, user_id, class_id, correct_percentage):
    try:
        # Define the SQL query to insert data into the quiz_results table
        sql_query = """
        INSERT INTO quiz_results (quiz_id, user_id, class_id, correct_percentage)
        VALUES (?, ?, ?, ?);
        """

        # Execute the insert query
        cursor.execute(sql_query, (quiz_id, user_id, class_id, correct_percentage))

        # Fetch the last inserted row's run_id
        run_id = cursor.lastrowid

        # Return the run_id
        return run_id

    except Exception as e:
        print(f"Error saving quiz result: {e}")
        raise Exception("Error saving quiz result to the database.")



def save_quiz_run_details(cursor, run_id, quiz_id, user_id, answers):
    try:
        # Prepare and insert each question's selected answer and the correct answer
        for answer in answers:
            question_id = answer["question_id"]
            input_option_id = answer["option_id_from_frontend"]
            input_option_text = answer["option_text_from_frontend"]
            answer_option_id = answer["option_id_from_backend"]
            answer_option_text = answer["option_text_from_backend"]

            # Define the SQL query to insert each answer
            sql_query = """
            INSERT INTO quiz_run_details 
            (run_id, quiz_id, user_id, question_id, input_option_id, input_option_text, 
             answer_option_id, answer_option_text)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """

            # Execute the insert statement with the provided values
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
