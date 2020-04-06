<small>[Return Home](./../../README.md)</small>

# SQL

What is a database? => A structured set of computerized data with an accessible interface
<ol>
<li>A collection of data</li>
<li>A method for accessing and manipulating the data</li>
</ol>

App => Database management system => Database
* A Database management system is what allows your app to interface with the Database
* PostgreSQL, MySQL are both `database management systems`. 

`SQL` - Structrued Querey language
* The language we use to 'talk' to our databases. 

* When you work with `MySQL` you are primaily writing `SQL`. 
    * PostreSQL and MySQL are very similar. 

#### Groom SQL commands
* `mysql-ctl start` - Start MySQL server
* `mysql-ctl stop`  - Stop MySQL server
* `mysql-ctl cli`   - Start MySQL shell 
* `exit`            - Leave the MySQL shell


#### SQL Commands

|Command | Description|
|--------|------------|
|SHOW DATABASES | Shows all databases on the server
|CREATE DATABASE `<name>` | Creates a new database. 
|DROP DATABSE `<name>` | Deletes a database
|USE `<database name>` | Tells the server which database you want to use at any given time
|SELECT database() | Tells you the currently used database