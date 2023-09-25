CREATE DATABASE nextdash;

CREATE TABLE Accounts(
    accountID SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE BusinessData(
    quarter numeric(1,0) PRIMARY KEY NOT NULL,
    revenue numeric(10,2) NOT NULL,
    new_hires numeric(4,0) NOT NULL
);

CREATE TABLE Employees(
    empID SERIAL PRIMARY KEY,  
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    salary numeric(10, 2) NOT NULL
);

