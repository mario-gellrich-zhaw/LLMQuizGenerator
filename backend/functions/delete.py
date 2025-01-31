from flask import jsonify


def delete_qz(cursor, quiz_id, conn):
    try:
        # Fetch the quiz details before deletion
        cursor.execute(
            """
            SELECT quiz_id FROM quizzes
            WHERE quiz_id = ?;
            """,
            (quiz_id,)
        )

        # Check if quiz exists
        quiz = cursor.fetchone()
        if not quiz:
            # If no quiz was found, return a 404 error
            return jsonify({"error": "Quiz not found"}), 404

        # Now delete the quiz
        cursor.execute(
            """
            DELETE FROM quizzes
            WHERE quiz_id = ?;
            """,
            (quiz_id,)
        )

        # Commit the transaction (cascade delete for questions and options happens automatically)
        conn.commit()

        # Return the deleted quiz_id
        return jsonify({"message": "Quiz deleted successfully", "quiz_id": quiz_id}), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500
    finally:
        # Close the cursor and connection
        cursor.close()
        conn.close()



def delete_class(cursor, class_id, conn):
    cursor.execute("DELETE FROM classes WHERE id = ?", (class_id,))
    # Commit changes and close the connection
    conn.commit()

    # Respond with a success message
    return jsonify({"message": "Class deleted successfully"}), 200


def delete_quiz_from_class(cursor, class_id, quiz_id, conn):
    # SQL query to delete the specific entry in the class_quizzes table
    cursor.execute(
        "DELETE FROM class_quizzes WHERE class_id = ? AND quiz_id = ?",
        (class_id, quiz_id),
    )

    # Commit changes and close the connection
    conn.commit()

    # Respond with a success message
    return jsonify({"message": "Quiz removed from class successfully"}), 200
