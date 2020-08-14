<small>[Return Home](../../README.md)</small> | <small>[Return to CS 340](index.md)</small>

### Schemas

- Table set of constraints on data
  - In simple terms it is the table definition
- Exist for entities and relationships
- Composed of attributes and constraints
- Typically conceptual schema for our purposes

| Keyword                 | Definition                                                             |
| ----------------------- | ---------------------------------------------------------------------- |
| `Relations`             | A table and all its entries                                            |
| `Relation schema`       | The set of constraints on the relation                                 |
| `Degree`                | Number of attributes in a relation (columns in a table)                |
| `Tuple`                 | Row in the table                                                       |
| `Cardinality`           | Number of possible unique rows in a relation (typically a huge number) |
| `Integrity constraints` | Rules specifying what can go in a tuple                                |
|`Keys`| A set of attributes which uniquely defines rows in a table

### Integrity constaints

| Type          | Definition                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| `Domain`      | Restricts the domain of an attribute (e.g. int, varchar, float)                                           |
| `Key`         | Requires that the entires in a column or combination of columns be unique                                 |
| `Not Null`    | Requires that a value always be specified for an attribute                                                |
| `Entity`      | Primary keys cannot be null                                                                               |
| `Referential` | Requires that an attribute be present in another table                                                    |
| `Semantic`    | Rules about the system outside of the database (e.g. Only juniors and seniors can take 300 level classes). Typically has to be enforced at the application level (DBMS will not be able to enforce this) |

### Primary Key
* Tables will have one primary key
* The chosen candidate key(maybe arbitrary which candidate key is the primary key)
* Foreign keys reference primary keys
* When in doubt, make an auto incrementing integer the primary key

### Foreign Keys
* Used in relationships
* 1-to-Many or Many-to-Many relationship
* 1 to 1 get combined into a single entity
* Foreign key constraint says that an attribute can only containe values that are the primary key of a specified table 

#### Changes to foreign keys
* Conditions that break relationships are UPDATE and DELETE
* Outcomes of foreign key changes
  * NO ACTION
    * Rejects attempt to change the referenced row, and will stop the update/delete from happening
  * CASCADE
    * Propagates the changes to the referencer (deletes/updates rows that reference the foreign key)
  * SET NULL
    * Sets the referencer to a NULL value when the foreign key changes or is deleted