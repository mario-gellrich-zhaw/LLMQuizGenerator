from flask import jsonify


def delete_qz(cursor, quiz_id, conn):
    try:
        cursor.execute(
            """
            SELECT quiz_id FROM quizzes
            WHERE quiz_id = ?;
            """,
            (quiz_id,)
        )

        quiz = cursor.fetchone()
        if not quiz:
            return jsonify({"error": "Quiz not found"}), 404

        cursor.execute(
            """
            DELETE FROM quizzes
            WHERE quiz_id = ?;
            """,
            (quiz_id,)
        )

        conn.commit()

        # Return the deleted quiz_id, needed to delete from state in frontend
        return jsonify({"message": "Quiz deleted successfully", "quiz_id": quiz_id}), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500
    finally:
        cursor.close()
        conn.close()



def delete_class(cursor, class_id, conn):
    cursor.execute("DELETE FROM classes WHERE id = ?", (class_id,))
    conn.commit()

    return jsonify({"message": "Class deleted successfully"}), 200


def delete_quiz_from_class(cursor, class_id, quiz_id, conn):
    cursor.execute(
        "DELETE FROM class_quizzes WHERE class_id = ? AND quiz_id = ?",
        (class_id, quiz_id),
    )

    conn.commit()
    
    return jsonify({"message": "Quiz removed from class successfully"}), 200
