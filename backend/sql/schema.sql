PRAGMA foreign_keys = ON;

-- Create the quizzes table
CREATE TABLE quizzes (
    quiz_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    published INTEGER DEFAULT 0  -- 0 = False, 1 = True
);

-- Create the questions table with image_url
CREATE TABLE questions (
    question_id INTEGER PRIMARY KEY AUTOINCREMENT,
    quiz_id INTEGER NOT NULL,
    question TEXT NOT NULL,
    code TEXT,
    image_url TEXT,  -- Column for storing image URL or file path
    answer TEXT NOT NULL,
    topic TEXT,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE
);

-- Create the options table
CREATE TABLE options (
    option_id INTEGER PRIMARY KEY AUTOINCREMENT,
    question_id INTEGER NOT NULL,
    option_text TEXT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(question_id) ON DELETE CASCADE
);

-- Create the classes table
CREATE TABLE classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,               
    class_name TEXT NOT NULL       
);

-- Create the users table
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,                  
    username TEXT NOT NULL UNIQUE,  
    password TEXT NOT NULL,        
    role INTEGER NOT NULL DEFAULT 2,                     
    class_id INTEGER,
    last_active INTEGER,  -- Store timestamps as Unix timestamps (INTEGER)
    FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE SET NULL
);

-- Bridge table for class to quiz relationship
CREATE TABLE class_quizzes (
    class_id INTEGER NOT NULL,
    quiz_id INTEGER NOT NULL, 
    PRIMARY KEY (class_id, quiz_id),
    FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE
);

-- Result Table
CREATE TABLE quiz_results (
    run_id INTEGER PRIMARY KEY AUTOINCREMENT,                     
    quiz_id INTEGER NOT NULL, 
    user_id INTEGER NOT NULL,       
    class_id INTEGER NOT NULL,    
    correct_percentage REAL NOT NULL,        
    created_at TEXT DEFAULT (strftime('%Y-%m-%d', 'now')),
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE
);


-- Detailed Results
CREATE TABLE quiz_run_details (
    run_id INTEGER NOT NULL, 
    quiz_id INTEGER NOT NULL,    
    user_id INTEGER NOT NULL,           
    question_id INTEGER NOT NULL, 
    input_option_id INTEGER,                                 
    input_option_text TEXT,                              
    answer_option_id INTEGER,                                
    answer_option_text TEXT,                                   
    PRIMARY KEY (run_id, quiz_id, user_id, question_id),
    FOREIGN KEY (run_id) REFERENCES quiz_results(run_id) ON DELETE CASCADE,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES questions(question_id) ON DELETE CASCADE
);
