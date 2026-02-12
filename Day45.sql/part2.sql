ALTER TABLE employees
ADD department varchar(50);
ALTER TABLE employees
RENAME column name to emp_name;
INSERT INTO employees(emp_id,emp_name,email,salary,department)
VALUES( 2, "shree","me@gmail.com",8000000,"IT"),
( 3, "krish","dv@gmail.com",8000000,"NON IT"),
( 4, "adhvik","ug@gmail.com",8000000,"IT"),
( 5, "kayal","man@gmail.com",8000000,"NON IT");

UPDATE employees
SET salary = 45000
WHERE emp_id = 1;

DELETE FROM employees
WHERE emp_id = 1;

SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET salary = salary*1.10
WHERE department ="IT";

DELETE FROM employees
WHERE status = 'inactive';

ALTER TABLE employees
MODIFY salary BIGINT;