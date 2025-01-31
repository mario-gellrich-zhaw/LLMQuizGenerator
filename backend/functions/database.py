import bcrypt
import sqlite3
import os

def initialize_database():
    db_path = "backend/database/database.db"
    schema_path = "backend/sql/schema.sql"
    classes_path ="backend/sql/test_classes.sql"
    test_path ="backend/sql/test_data.sql"

    # Create database if it doesn't exist
    if not os.path.exists(db_path):
        conn = sqlite3.connect(db_path)
        cur = conn.cursor()

        with open(schema_path, "r") as f:
            conn.executescript(f.read())

        default_classes(conn,classes_path)
        default_users(cur)
        test_data(conn,test_path)
        
        conn.commit()
        conn.close()

# hashing password for better security
def hashed_password(data):
    password = bcrypt.hashpw(data.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
    return password

# add default users if the database is created
def default_users(cur):
    cur.execute("SELECT * FROM users WHERE username = 'admin'")
    admin_user = cur.fetchone()

    if not admin_user:
        cur.execute(
            """
            INSERT INTO users (username, password, role, class_id, last_active)
            VALUES (?, ?, ?, ?, ?)
            """,
            ("admin", hashed_password("admin"), 1, None, None)
        )

    cur.execute("SELECT * FROM users WHERE username = 'max'")
    max_user = cur.fetchone()

    if not max_user:
        cur.execute(
            """
            INSERT INTO users (username, password, role, class_id, last_active)
            VALUES (?, ?, ?, ?, ?)
            """,
            ("max", hashed_password("max"), 2, 2, None)
        )

    cur.execute("SELECT * FROM users WHERE username = 'peter'")
    peter_user = cur.fetchone()

    if not peter_user:
        cur.execute(
            """
            INSERT INTO users (username, password, role, class_id, last_active)
            VALUES (?, ?, ?, ?, ?)
            """,
            ("peter", hashed_password("peter"), 2, 2, None)
        )

# add default classes, this is needed before creating users due to foreign key constraints
def default_classes(conn, schema_path):
    with open(schema_path, "r") as f:
            conn.executescript(f.read())

# testdata, 2 quizzes, multiple runs
def test_data(conn, schema_path):
    with open(schema_path, "r") as f:
            conn.executescript(f.read())