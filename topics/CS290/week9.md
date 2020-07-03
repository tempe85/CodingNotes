<small>[Return Home](../../README.md)</small> | <small>[Return to CS 290](index.md)</small>

# DATABASES

| Keyword   | Definition                      |
| --------- | ------------------------------- |
| `VARCHAR(n)` | Variable length character array. `n` is the max length of the string|
|`BOOLEAN`| Value of 1 (true) or 0 (false). MySQL can accept TRUE or FALSE as well (but will still be stored as a number)
|`DATE`| Stores the date in the format `'yyy-mm-dd'`. The quotes are necessary otherwise it will do subtraction. 

### Constraints

| Keyword   | Definition                      |
| --------- | ------------------------------- |
| `PRIMARY KEY` | Column that holds the thing which identifies a row. Must be unique between rows, often an `int` with `AUTO_INCREMENT` property|
|`AUTO_INCREMENT`| Lets MySQL know ot increment value of this by 1 automatically. Database keeps track of this for you. 
|`NOT NULL`| Value cannot be null. 


```sql
CREATE TABLE todo(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  done BOOLEAN,
  due DATE);
  
  INSERT INTO todo (name, done, due) VALUES
  ("Get gas",0,"2015-11-25"),("Write test",0,"2015-12-1")
```

* Cannot do directly quality comparisons on NULL
  

### Basic SQL
* Structured Query Language 
* Strings can be single or double quaoted
  * Does not include back ticks, can put table names in back ticks
* Math operators are typically the same except `<>` is not equals
* && or AND for AND logic and || or OR for OR logic

`SELECT * FROM todo;` 
* Selects every column and row in the table. 

### SELECT

```sql
SELECT * FROM todo WHERE done = 0 AND due < '2016-1-1';
```
* Selects all data from rows where done is false and the due date is before the date specified

```sql
SELECT name, due FROM todo WHERE done = 0 AND due < '2016-1-1';
```
* Only return the name and due columns

### DELETE
`DELETE FROM [table] WHERE [condition];`
* Deletes all rows where the condition is true

### INSERT

```sql 
INSERT INTO todo(name, done, due) VALUES ('Task 1', 1, '2017-1-1'), ('Task 2', 0, '2018-1-1');
```

### UPDATE

```sql
UPDATE todo SET done=1 WHERE due<'2015-12-1';
```
* Not case sensitive

## Using MySQL with Node
*MySQL module 

Connect to the database:
```javascript
var mysql = require('mysql');
var pool = mysql.createPool({
  host  : 'localhost',
  user  : 'student',
  password: 'default',
  database: 'student'
});
```
* Host: Address of MySQL server

Making Queries:
```javascript
app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS todo", function(err){
    var createString = "CREATE TABLE todo(" +
    "id INT PRIMARY KEY AUTO_INCREMENT," +
    "name VARCHAR(255) NOT NULL," +
    "done BOOLEAN," +
    "due DATE)";
    mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('home',context);
    })
  });
});
```