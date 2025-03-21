import os
import re
from flask import Flask, jsonify, request, send_from_directory, abort
from dotenv import load_dotenv
from flask_cors import CORS
from openai import OpenAI
import bcrypt
import sqlite3


# helper functions
from backend.functions.upload import handle_file_upload
from backend.functions.helper import (
    update_question_image_url,
    delete_image,
    compare_and_calculate_answers,
    save_quiz_result,
    save_quiz_run_details,
)
from backend.functions.get import (
    return_all_quizzes,
    return_all_quizzes_for_run,
    return_all_classes,
    get_users_not_in_class,
    get_users,
    get_quizzes_not_in_class_by_class_id,
    fetch_answer_data,
    get_history,
    get_quiz_results,
    get_quiz_results_base,
)
from backend.functions.post import save_quiz, add_one_class, add_quiz_to_class_by_class_id
from backend.functions.put import (
    update_entire_quiz,
    update_published_status,
    update_user_class,
    update_user,
)
from backend.functions.delete import delete_qz, delete_class, delete_quiz_from_class
from backend.functions.database import initialize_database

UPLOAD_FOLDER = os.path.join(
    os.path.dirname(os.path.abspath(__file__)), "backend/upload_images"
)

# Database connection setup
def get_db_connection():
    conn = sqlite3.connect("backend/database/database.db")
    conn.row_factory = sqlite3.Row
    return conn


# Initialize the database before running the app
initialize_database()

app = Flask(__name__, static_folder="frontend/dist", static_url_path="")
@app.route("/")
def index():
    return send_from_directory(os.path.join(app.static_folder), "index.html")

@app.errorhandler(404)

def not_found(e):
    return send_from_directory(os.path.join(app.static_folder), "index.html")

CORS(app)

# Load environment variables from a .env file
load_dotenv()

# Load the OpenAI API key from an environment variable
OPENAI_API_KEY = os.getenv("DS_PROJECT_KEY")

# Path to prompt file
PROMPT_FILE = "backend/prompt/ChatGPT_prompt.txt"

@app.route("/getAllQuizzes", methods=["GET"])
def get_all_quizzes():
    try:
        conn = get_db_connection()

        cursor = conn.cursor()
        quizzes = return_all_quizzes(conn, cursor)

        return jsonify(quizzes)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/getAllQuizzesForRun", methods=["GET"])
def get_all_quizzes_for_run():
    try:
        class_id = request.args.get("class_id")

        if not class_id:
            return jsonify({"error": "Class ID is required"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        # Get quizzes filtered by class_id
        quizzes = return_all_quizzes_for_run(conn, cursor, class_id)
        return jsonify(quizzes)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/saveQuestions", methods=["POST"])
def save_questions():
    try:
        quiz_data = request.get_json()

        # Validate the structure of the incoming quiz data
        if (
            not isinstance(quiz_data, dict)
            or "title" not in quiz_data
            or "questions" not in quiz_data
        ):
            return (
                jsonify(
                    {
                        "error": "Invalid quiz format. A quiz must have 'title' and 'questions'."
                    }
                ),
                400,
            )

        title = quiz_data["title"]
        questions = quiz_data["questions"]

        conn = get_db_connection()
        cursor = conn.cursor()

        try:
            full_quiz = save_quiz(conn, cursor, title, questions)
            return (
                jsonify({"message": "Quiz saved successfully", "quiz": full_quiz}),
                200,
            )
        except Exception as e:
            conn.rollback()
            return jsonify({"error": str(e)}), 500
        finally:
            cursor.close()
            conn.close()
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/updateQuizStatus/<int:quiz_id>", methods=["PUT"])
def update_quiz_status(quiz_id):
    try:
        data = request.get_json()

        # Validate that the published field is present in the request
        if "published" not in data:
            return jsonify({"error": "Missing 'published' field in request body"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        updated_row = update_published_status(cursor, conn, quiz_id, data)

        return (
            jsonify(
                {
                    "message": "Quiz status updated successfully",
                    "updated_quiz": updated_row,
                }
            ),
            200,
        )

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500


@app.route("/updateQuiz/<int:quiz_id>", methods=["PUT"])
def update_quiz(quiz_id):
    try:
        data = request.get_json()

        # Validate the structure of the incoming data
        if not isinstance(data, dict) or "title" not in data or "questions" not in data:
            return (
                jsonify(
                    {
                        "error": "Invalid format. The request body must include 'title' and 'questions'."
                    }
                ),
                400,
            )

        title = data["title"]
        questions = data["questions"]

        conn = get_db_connection()
        cursor = conn.cursor()


        try:
            update_entire_quiz(quiz_id, conn, cursor, title, questions)

        except Exception as e:
            conn.rollback()
            return jsonify({"error": str(e)}), 500

        finally:
            cursor.close()
            conn.close()

        return jsonify({"message": "Quiz updated successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/savePicture", methods=["POST"])
def save_picture():
    question_id = request.form.get("question_id")
    file = request.files.get("image_file")

    if not question_id:
        return jsonify({"error": "Missing 'question_id'"}), 400

    try:
        image_url = handle_file_upload(file, question_id)

        with get_db_connection() as conn:
            update_question_image_url(conn, question_id, image_url)

        return (
            jsonify(
                {
                    "message": "File uploaded successfully",
                    "image_url": image_url,
                    "question_id": question_id,
                }
            ),
            200,
        )

    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@app.route("/upload_images/<filename>", methods=["GET"])
def serve_image(filename):
    try:
        return send_from_directory(UPLOAD_FOLDER, filename)
    except FileNotFoundError:
        abort(404, description="Image not found")


@app.route("/deleteQuiz/<int:quiz_id>", methods=["DELETE"])
def delete_quiz(quiz_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        delete_qz(cursor, quiz_id, conn)

        return jsonify({"message": "Quiz deleted successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/sendPrompt", methods=["POST"])
def send_prompt():
    data = request.get_json()

    q_topics = data.get("qTopics")
    total_questions = data.get("totalQuestions")
    options = data.get("options")
    diff_from = data.get("diffFrom")
    diff_to = data.get("diffTo")
    topics = data.get("topics")

    # Read the prompt template from the file
    try:
        with open(PROMPT_FILE, "r") as file:
            prompt_template = file.read()

        # Replace the placeholders with the corresponding frontend values
        prompt = prompt_template.replace("[qTopics]", str(q_topics))
        prompt = prompt.replace("[qTotal]", str(total_questions))
        prompt = prompt.replace("[qOptions]", str(options))
        prompt = prompt.replace("[qDiffFrom]", str(diff_from))
        prompt = prompt.replace("[qDiffTo]", str(diff_to))

        # Add topics after "Here are the topics:"
        topics_text = "\n".join([f"- {topic}" for topic in topics])  # Format topics
        prompt = prompt.replace(
            "Here are the topics:", f"Here are the topics:\n{topics_text}"
        )

        response = OpenAI(
            api_key=(OPENAI_API_KEY),  # This is the default and can be omitted
        )

        chat_completion = response.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model="gpt-4o-mini",
            max_tokens=3000,
        )

        # Remove markdown backticks and language identifiers
        reply = chat_completion.choices[0].message.content
        reply = re.sub(r'^```json|```$', '', reply.strip(), flags=re.MULTILINE).strip()

        return jsonify(
            {"success": True, "reply": reply}
        )

    except Exception as e:
        return jsonify(
            {"message": f"Error reading the prompt file: {str(e)}", "status": "error"}
        )


@app.route("/deleteImage", methods=["DELETE"])
def delete_image_endpoint():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        data = request.get_json()

        # Validate the presence of the 'url' key
        if not data:
            return (
                jsonify(
                    {"status": "error", "message": "Missing 'url' in request payload"}
                ),
                400,
            )

        url = data["url"]
        question_id = data.get("question_id")

        result = delete_image(url)

        if result["status"] == "success":
            cursor.execute(
                "UPDATE questions SET image_url = NULL WHERE question_id = ?",
                (question_id,)
            )
            conn.commit()
            return jsonify(result), 200
        else:
            return jsonify(result), 500
    except Exception as e:
        return (
            jsonify(
                {
                    "status": "error",
                    "message": "An unexpected error occurred",
                    "details": str(e),
                }
            ),
            500,
        )

@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    username = data.get("username")
    password = data.get("password")
    role = data.get("role", 2)  # Default role to 2 (Student)

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

    try:
        conn = get_db_connection()
        cur = conn.cursor()

        cur.execute(
            """
            INSERT INTO users (username, password, role, class_id, last_active)
            VALUES (?, ?, ?, NULL, NULL)
            """,
            (username, hashed_password.decode("utf-8"), role),
        )

        # Get the id of the inserted user, needed for frontend api calls
        cur.execute("SELECT id, username, role, class_id, last_active FROM users WHERE username = ?", (username,))
        new_user = cur.fetchone()

        conn.commit()
        cur.close()
        conn.close()

        if new_user:
            user = {
                "id":new_user[0],
                "username": new_user[1],  
                "role": new_user[2], 
                "class_id":new_user[3],
                "last_active":None,
            }

            return (
                jsonify(user),
                201,
            )

    except sqlite3.IntegrityError:
        return jsonify({"error": "Username already exists"}), 409
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    try:
        conn = get_db_connection()
        cur = conn.cursor()

        cur.execute(
            """
            SELECT id, username, password, role, class_id, last_active
            FROM users
            WHERE username = ?
        """,
            (username,),
        )
        user_row = cur.fetchone()

        cur.close()
        conn.close()

        if not user_row:
            return jsonify({"error": "Invalid username or password"}), 401

        user_id, db_username, db_password, role, class_id, last_active = user_row

        # Verify the password
        if not bcrypt.checkpw(password.encode("utf-8"), db_password.encode("utf-8")):
            return jsonify({"error": "Invalid username or password"}), 401

        # Return the user object
        user_object = {
            "id": user_id,
            "username": db_username,
            "role": role,
            "class_id": class_id,
            "last_active": last_active,
        }

        update_last_active(user_id)

        return jsonify(user_object), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500


def update_last_active(user_id):
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        cur.execute(
            """
            UPDATE users
            SET last_active = NOW()
            WHERE id = ?
        """,
            (user_id,),
        )

        conn.commit()
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error updating last_active: {e}")


@app.route("/getAllClasses", methods=["GET"])
def get_all_classes():
    try:
        conn = get_db_connection()

        cursor = conn.cursor()
        classes = return_all_classes(conn, cursor)

        return jsonify(classes)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/add_class", methods=["POST"])
def add_class():
    data = request.get_json()

    class_name = data.get("class_name")

    if not class_name:
        return jsonify({"error": "Class name is required"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        new_class = add_one_class(class_name, conn, cursor)
        return jsonify({"class": new_class}), 201
    except sqlite3.IntegrityError:
        return jsonify({"error": "Class name already exists"}), 409
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500


@app.route("/get_all_users_for_class", methods=["GET"])
def get_all_users_for_class():
    class_id = request.args.get("class_id")

    if not class_id:
        return jsonify({"error": "Class ID is required"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        return get_users_not_in_class(class_id, conn, cursor)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500


@app.route("/get_all_users", methods=["GET"])
def get_all_users():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        return get_users(cursor)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500


@app.route("/add_user_to_class", methods=["PUT"])
def add_user_to_class():
    data = request.get_json()

    user_id = data.get("user_id")
    class_id = data.get("class_id")

    if not user_id:
        return jsonify({"error": "User ID is required"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        return update_user_class(conn, cursor, class_id, user_id)

    except sqlite3.Error as e:
        print(f"Database error: {e}")
        return (
            jsonify({"error": "An error occurred while adding the user to the class"}),
            500,
        )
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500


@app.route("/deleteClass", methods=["DELETE"])
def delete_class_endpoint():
    try:
        data = request.get_json()
        class_id = data.get("class_id")

        if not class_id:
            return jsonify({"error": "class_id is required"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        return delete_class(cursor, class_id, conn)

    except Exception as e:
        print(f"Error deleting class: {e}")
        return jsonify({"error": str(e)}), 500


@app.route("/update_user_role", methods=["PUT"])
def update_user_role():
    try:
        data = request.get_json()
        user_id = data["user_id"]
        new_role = data["role"]

        conn = get_db_connection()
        cursor = conn.cursor()

        return update_user(conn, cursor, new_role, user_id)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/deleteQuizFromClass", methods=["DELETE"])
def delete_quiz_from_class_endpoint():
    try:
        data = request.get_json()
        class_id = data.get("class_id")
        quiz_id = data.get("quiz_id")

        if not class_id or not quiz_id:
            return jsonify({"error": "class_id and quiz_id are required"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        return delete_quiz_from_class(cursor, class_id, quiz_id, conn)

    except Exception as e:
        print(f"Error deleting quiz from class: {e}")
        return jsonify({"error": str(e)}), 500


@app.route("/get_all_quizzes_for_class", methods=["GET"])
def get_quizzes_not_in_class():
    try:
        class_id = request.args.get("class_id", type=int)

        if not class_id:
            return jsonify({"error": "class_id is required"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        return get_quizzes_not_in_class_by_class_id(cursor, class_id)

    except Exception as e:
        print(f"Error fetching quizzes: {e}")
        return jsonify({"error": str(e)}), 500


@app.route("/add_quiz_to_class", methods=["POST"])
def add_quiz_to_class():
    try:
        request_data = request.get_json()
        class_id = request_data.get("class_id")
        quiz_id = request_data.get("quiz_id")

        if not class_id or not quiz_id:
            return jsonify({"error": "class_id and quiz_id are required"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        result = add_quiz_to_class_by_class_id(cursor, class_id, quiz_id)

        if result:
            return jsonify(
                {
                    "message": "Quiz added to class successfully",
                    "class_id": class_id,
                    "quiz_id": quiz_id,
                }
            )

        return jsonify({"error": "Failed to add quiz to class"}), 500

    except Exception as e:
        print(f"Error adding quiz to class: {e}")
        return jsonify({"error": str(e)}), 500


@app.route("/validate_quiz", methods=["POST"])
def validate_quiz():
    try:
        data = request.get_json()
        quiz_id = data.get("quiz_id")
        user_id = data.get("user_id")
        class_id = data.get("class_id")
        role = data.get("role")
        user_answers = data.get("Answers")

        # Set class to admin class --> teachers don't belong to a class, not null constraints when saving
        if role == 1:
            class_id = 1
        # Connect to the database
        conn = get_db_connection()
        cursor = conn.cursor()

        # Fetch the correct answers from the database
        resultset = fetch_answer_data(cursor, quiz_id)

        # Call the function to compare answers and calculate results
        result = compare_and_calculate_answers(resultset, user_answers, quiz_id)

        # Save the result to the quiz_results table
        run_id = save_quiz_result(
            cursor, quiz_id, user_id, class_id, result["correct_answers"]
        )

        # save details of the run
        save_quiz_run_details(cursor, run_id, quiz_id, user_id, result["Answers"])

        conn.commit()

        return jsonify(result)

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500


@app.route("/get_quiz_history/<int:user_id>", methods=["GET"])
def get_quiz_history(user_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        result = get_history(cursor, user_id)

        return jsonify(result)

    except Exception as e:
        print(f"Error fetching quiz history: {e}")
        return jsonify({"error": "An error occurred"}), 500


@app.route("/get_results", methods=["GET"])
def get_results():
    try:
        from_date = request.args.get("from")
        to_date = request.args.get("to")
        class_id = request.args.get("class")
        quiz_id = request.args.get("quiz")

        if not (from_date and to_date and class_id and quiz_id):
            return jsonify({"error": "Missing required parameters"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        results = get_quiz_results(cursor, from_date, to_date, class_id, quiz_id)
        print(results)
        return results

    except Exception as e:
        print(f"Error fetching quiz history: {e}")
        return jsonify({"error": "An error occurred"}), 500


@app.route("/get_results_base", methods=["GET"])
def get_results_base():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        result = get_quiz_results_base(cursor)

        return jsonify(result)

    except Exception as e:
        print(f"Error fetching quiz history: {e}")
        return jsonify({"error": "An error occurred"}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)