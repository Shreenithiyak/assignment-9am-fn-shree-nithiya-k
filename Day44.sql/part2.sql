-- create database student;
-- use student;
-- create table student(
-- student_id INT primary key,
-- name varchar(100)not null,
-- email varchar(100) unique,
-- age INT check(age>=18),
-- status varchar(20) default "active"
-- );


-- CREATE TABLE course (
--     course_id INT PRIMARY KEY,
--     course_name VARCHAR(50) NOT NULL,
--     duration INT,
--     fee INT CHECK (fee > 0),
--     status VARCHAR(10) GENERATED ALWAYS AS (
--         CASE 
--             WHEN duration > 5 THEN 'inactive'
--             ELSE 'active'
--         END
--     ) STORED
-- );
-- INSERT INTO course (course_id, course_name, duration, fee)
-- VALUES (1, 'React Basics', 3, 5000);

-- create table enrollement(
-- enroll_id INT PRIMARY KEY,
-- course_id INT,
-- student_id INT,
-- FOREIGN KEY (student_id) REFERENCES student(student_id),
-- FOREIGN KEY (course_id) REFERENCES course(course_id)
-- );

-- CREATE TABLE marks (
--     mark_id INT PRIMARY KEY,
--     student_id INT,
--     subject VARCHAR(50),
--     score INT CHECK (score BETWEEN 0 AND 100),
--     FOREIGN KEY (student_id) REFERENCES student(student_id)
-- );

-- CREATE TABLE employees (
--     emp_id INT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE,
--     salary INT CHECK (salary > 0),
--     dept_id INT
-- );

-- CREATE TABLE departments (
--     dept_id INT PRIMARY KEY,
--     dept_name VARCHAR(100) NOT NULL UNIQUE
-- );
-- ALTER TABLE employees
-- ADD FOREIGN KEY (dept_id) REFERENCES departments(dept_id);

