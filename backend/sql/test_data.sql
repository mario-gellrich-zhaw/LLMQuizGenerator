-- quizzes
INSERT INTO quizzes (title, published) 
VALUES 
("JavaScript Advanced Quiz", 1),
("Advanced SQL Concepts Quiz", 1);

--questions
INSERT INTO questions (quiz_id, question, code, answer, topic) 
VALUES 
(2, "What is the purpose of the 'INSERT INTO ... SELECT' statement in SQL?", "INSERT INTO target_table (column1, column2) SELECT column1, column2 FROM source_table;", "To insert data into the target table based on a selection from another table.", "sql insert code"),
(2, "Which of the following statements correctly performs a multi-row insert in SQL?", "INSERT INTO products (product_name, price) VALUES ('Item A', 10.99), ('Item B', 12.49);", "INSERT INTO products (product_name, price) VALUES ('Item A', 10.99), ('Item B', 12.49);", "sql insert code"),
(2, "What does a LEFT JOIN do in SQL?", "SELECT * FROM employees LEFT JOIN departments ON employees.department_id = departments.id;", "It returns all rows from the left table, even if there are no matches in the right table.", "sql join code"),
(2, "Which of the following SQL statements demonstrates a FULL OUTER JOIN?", "SELECT a.name, b.project FROM employees a FULL OUTER JOIN projects b ON a.id = b.employee_id;", "SELECT a.name, b.project FROM employees a FULL OUTER JOIN projects b ON a.id = b.employee_id;", "sql join code"),
(1, "What will be the output of the following code? console.log(typeof NaN);", "console.log(typeof NaN);", "'number'", "javascript"),
(1, "What is the purpose of the 'bind' method in JavaScript?", "function example() { return this.value; }", "To create a new function with a specified 'this' value", "javascript"),
(1, "What will be the output of the following code? let x = 1; let y = x; y = 2; console.log(x);", "let x = 1; let y = x;y = 2;console.log(x);", "1", "javascript");

-- options
INSERT INTO options (question_id, option_text) 
VALUES 
(1, "To copy structure without copying any data."),
(1, "To insert data into the target table based on a selection from another table."),
(1, "To update existing records in the target table."),
(1, "To delete records from source_table after insertion."),
(1, "To create a new table with selected records."),
(2, "INSERT INTO products product_name, price VALUES ('Item A', 10.99), ('Item B', 12.49);"),
(2, "INSERT product_name, price INTO products VALUES ('Item A', 10.99), ('Item B', 12.49);"),
(2, "INSERT INTO products (product_name, price) VALUES ('Item A', 10.99), ('Item B', 12.49);"),
(2, "INSERT INTO products (product_name, price) ('Item A', 10.99), ('Item B', 12.49);"),
(2, "INSERT INTO products (VALUES ('Item A', 10.99), ('Item B', 12.49));"),
(3, "It returns only the rows with matching values in both tables."),
(3, "It returns all rows from the right table and the matched rows from the left table."),
(3, "It returns all rows from the left table, even if there are no matches in the right table."),
(3, "It returns the unique values from both tables based on a specified column."),
(3, "It updates data in the left table based on the condition with the right table."),
(4, "SELECT a.name, b.project FROM employees a INNER JOIN projects b ON a.id = b.employee_id;"),
(4, "SELECT a.name, b.project FROM employees a LEFT JOIN projects b ON a.id = b.employee_id;"),
(4, "SELECT a.name, b.project FROM employees a RIGHT JOIN projects b ON a.id = b.employee_id;"),
(4, "SELECT a.name, b.project FROM employees a FULL OUTER JOIN projects b ON a.id = b.employee_id;"),
(4, "SELECT a.name, b.project FROM employees a CROSS JOIN projects b;"),
(5, "'number'"),
(5, "'NaN'"),
(5, "'undefined'"),
(5, "'string'"),
(5, "'object'"),
(6, "To create a new function with a specified 'this' value"),
(6, "To change the execution context of a function"),
(6, "To invoke a function immediately"),
(6, "To prevent a function from being called"),
(6, "To convert a function to a string"),
(7, "1"),
(7, "2"),
(7, "undefined"),
(7, "ReferenceError"),
(7, "TypeError");

--class quizzes
INSERT INTO class_quizzes (class_id, quiz_id)
VALUES 
(2, 1),
(2, 2);

--quiz results
INSERT INTO quiz_results (quiz_id, user_id, class_id, correct_percentage, created_at) 
VALUES 
(1, 1, 1, 0.00, "2025-01-07 11:10:35.40387"),
(1, 1, 1, 66.67, "2025-01-07 11:28:40.895205"),
(1, 1, 1, 66.67, "2025-01-07 11:30:18.834896"),
(1, 1, 1, 66.67, "2025-01-07 18:49:31.680512"),
(2, 1, 1, 75.00, "2025-01-09 19:57:43.367856"),
(2, 1, 1, 0.00, "2025-01-09 19:57:59.203972"),
(2, 2, 2, 0.00, "2025-01-09 20:26:10.615652"),
(1, 2, 2, 66.67, "2025-01-09 20:26:24.765882"),
(2, 3, 2, 0.00, "2025-01-09 20:39:18.372237"),
(1, 3, 2, 100.00, "2025-01-09 20:47:25.175637"),
(1, 3, 2, 0.00, "2025-01-09 20:50:11.986739"),
(1, 3, 2, 0.00, "2025-01-09 20:50:48.620804"),
(2, 3, 2, 25.00, "2025-01-09 20:51:16.129212"),
(1, 1, 1, 100.00, "2025-01-09 23:19:30.282618"),
(1, 2, 2, 33.33, "2025-01-30 18:09:01.602892"),
(1, 2, 2, 0.00, "2025-01-30 18:09:47.049129");

--quiz result details
INSERT INTO quiz_run_details (run_id, quiz_id, user_id, question_id, input_option_id, input_option_text, answer_option_id, answer_option_text)
VALUES
(1, 1, 1, 5, 23, "'undefined'", 21, "'number'"),
(1, 1, 1, 6, 27, "To change the execution context of a function", 26, "To create a new function with a specified 'this' value"),
(1, 1, 1, 7, 33, "undefined", 31, "1"),
(2, 1, 1, 5, 21, "'number'", 21, "'number'"),
(2, 1, 1, 6, 28, "To invoke a function immediately", 26, "To create a new function with a specified 'this' value"),
(2, 1, 1, 7, 31, "1", 31, "1"),
(3, 1, 1, 5, 21, "'number'", 21, "'number'"),
(3, 1, 1, 6, 27, "To change the execution context of a function", 26, "To create a new function with a specified 'this' value"),
(3, 1, 1, 7, 31, "1", 31, "1"),
(4, 1, 1, 5, 21, "'number'", 21, "'number'"),
(4, 1, 1, 6, 28, "To invoke a function immediately", 26, "To create a new function with a specified 'this' value"),
(4, 1, 1, 7, 31, "1", 31, "1"),
(5, 2, 1, 1, 2, "To insert data into the target table based on a selection from another table.", 2, "To insert data into the target table based on a selection from another table."),
(5, 2, 1, 2, 7, "INSERT product_name, price INTO products VALUES ('Item A', 10.99), ('Item B', 12.49);", 8, "INSERT INTO products (product_name, price) VALUES ('Item A', 10.99), ('Item B', 12.49);"),
(5, 2, 1, 3, 13, "It returns all rows from the left table, even if there are no matches in the right table.", 13, "It returns all rows from the left table, even if there are no matches in the right table."),
(5, 2, 1, 4, 19, "SELECT a.name, b.project FROM employees a FULL OUTER JOIN projects b ON a.id = b.employee_id;", 19, "SELECT a.name, b.project FROM employees a FULL OUTER JOIN projects b ON a.id = b.employee_id;"),
(6, 2, 1, 1, 5, "To create a new table with selected records.", 2, "To insert data into the target table based on a selection from another table."),
(6, 2, 1, 2, 10, "INSERT INTO products (VALUES ('Item A', 10.99), ('Item B', 12.49));", 8, "INSERT INTO products (product_name, price) VALUES ('Item A', 10.99), ('Item B', 12.49);"),
(6, 2, 1, 3, 15, "It updates data in the left table based on the condition with the right table.", 13, "It returns all rows from the left table, even if there are no matches in the right table."),
(6, 2, 1, 4, 20, "SELECT a.name, b.project FROM employees a CROSS JOIN projects b;", 19, "SELECT a.name, b.project FROM employees a FULL OUTER JOIN projects b ON a.id = b.employee_id;"),
(7, 2, 2, 1, 3, "To update existing records in the target table.", 2, "To insert data into the target table based on a selection from another table."),
(7, 2, 2, 2, 9, "INSERT INTO products (product_name, price) ('Item A', 10.99), ('Item B', 12.49);", 8, "INSERT INTO products (product_name, price) VALUES ('Item A', 10.99), ('Item B', 12.49);"),
(7, 2, 2, 3, 14, "It returns the unique values from both tables based on a specified column.", 13, "It returns all rows from the left table, even if there are no matches in the right table."),
(7, 2, 2, 4, 17, "SELECT a.name, b.project FROM employees a LEFT JOIN projects b ON a.id = b.employee_id;", 19, "SELECT a.name, b.project FROM employees a FULL OUTER JOIN projects b ON a.id = b.employee_id;"),
(8, 1, 2, 5, 23, "'undefined'", 21, "'number'"),
(8, 1, 2, 6, 26, "To create a new function with a specified 'this' value", 26, "To create a new function with a specified 'this' value"),
(8, 1, 2, 7, 31, "1", 31, "1"),
(9, 2, 3, 1, 1, "To copy structure without copying any data.", 2, "To insert data into the target table based on a selection from another table."),
(9, 2, 3, 2, 6, "INSERT INTO products product_name, price VALUES ('Item A', 10.99), ('Item B', 12.49);", 8, "INSERT INTO products (product_name, price) VALUES ('Item A', 10.99), ('Item B', 12.49);"),
(9, 2, 3, 3, 11, "It returns only the rows with matching values in both tables.", 13, "It returns all rows from the left table, even if there are no matches in the right table."),
(9, 2, 3, 4, 16, "SELECT a.name, b.project FROM employees a INNER JOIN projects b ON a.id = b.employee_id;", 19, "SELECT a.name, b.project FROM employees a FULL OUTER JOIN projects b ON a.id = b.employee_id;"),
(10, 1, 3, 5, 21, "'number'", 21, "'number'"),
(10, 1, 3, 6, 26, "To create a new function with a specified 'this' value", 26, "To create a new function with a specified 'this' value"),
(10, 1, 3, 7, 31, "1", 31, "1"),
(11, 1, 3, 5, 22, "'NaN'", 21, "'number'"),
(11, 1, 3, 6, 28, "To invoke a function immediately", 26, "To create a new function with a specified 'this' value"),
(11, 1, 3, 7, 35, "TypeError", 31, "1"),
(12, 1, 3, 5, 23, "'undefined'", 21, "'number'"),
(12, 1, 3, 6, 27, "To change the execution context of a function", 26, "To create a new function with a specified 'this' value"),
(12, 1, 3, 7, 34, "ReferenceError", 31, "1"),
(13, 2, 3, 1, 2, "To insert data into the target table based on a selection from another table.", 2, "To insert data into the target table based on a selection from another table."),
(13, 2, 3, 2, 6, "INSERT INTO products product_name, price VALUES ('Item A', 10.99), ('Item B', 12.49);", 8, "INSERT INTO products (product_name, price) VALUES ('Item A', 10.99), ('Item B', 12.49);"),
(13, 2, 3, 3, 14, "It returns the unique values from both tables based on a specified column.", 13, "It returns all rows from the left table, even if there are no matches in the right table."),
(13, 2, 3, 4, 17, "SELECT a.name, b.project FROM employees a LEFT JOIN projects b ON a.id = b.employee_id;", 19, "SELECT a.name, b.project FROM employees a FULL OUTER JOIN projects b ON a.id = b.employee_id;"),
(14, 1, 1, 5, 21, "'number'", 21, "'number'"),
(14, 1, 1, 6, 26, "To create a new function with a specified 'this' value", 26, "To create a new function with a specified 'this' value"),
(14, 1, 1, 7, 31, "1", 31, "1"),
(15, 1, 2, 5, 22, "'NaN'", 21, "'number'"),
(15, 1, 2, 6, 28, "To invoke a function immediately", 26, "To create a new function with a specified 'this' value"),
(15, 1, 2, 7, 31, "1", 31, "1"),
(16, 1, 2, 5, 22, "'NaN'", 21, "'number'"),
(16, 1, 2, 6, 28, "To invoke a function immediately", 26, "To create a new function with a specified 'this' value"),
(16, 1, 2, 7, 32, "2", 31, "1");