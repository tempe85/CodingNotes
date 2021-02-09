### LEFT JOIN

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
```
* Returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side, if there is no match.

<img src="./../../images/alljoins.jpg">
