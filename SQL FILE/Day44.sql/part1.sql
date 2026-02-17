-- Define table in your own words
A table is a structure inside a database that stores data in rows and columns, where each row is a record and each column is a field.
Trick:
Table = Excel sheet inside database
-- Difference between NOT NULL & UNIQUE
NOT NULL	                            UNIQUE
Column cannot store empty value	        Column cannot store duplicate values
Prevents NULL	                        Prevents repetition
Many rows can have different values	    Each value must be different
-- Why PRIMARY KEY is important
Primary key:
Uniquely identifies each row
Cannot be NULL
Automatically UNIQUE
Used to connect tables
Example: student_id, order_id
 One line:
“Primary key is the identity card of a row.”
-- Write syntax for DEFAULT
CREATE TABLE table_name (
    column1 datatype DEFAULT default_value,
    column2 datatype,
    ...
);
-- What is FOREIGN KEY?
foreign key is a field in one table that refers to the primary key in another table, creating a relationship between the two tables.
Trick:
“Foreign key connects tables.”
