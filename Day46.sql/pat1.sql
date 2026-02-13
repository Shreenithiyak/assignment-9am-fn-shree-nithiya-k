-- Fetch all employee names
-- Find employees with salary > 40000
-- Get distinct departments
-- Sort employees by salary
-- Count total employees


select emp_name from employees;
select * from employees where salary > 40000;
select DISTINCT department from employees;
SELECT * FROM employees ORDER BY salary ASC;
select * from employees order by salary desc;
SELECT COUNT(*) AS total_employees  FROM employees;