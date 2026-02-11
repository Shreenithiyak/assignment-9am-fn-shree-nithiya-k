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

