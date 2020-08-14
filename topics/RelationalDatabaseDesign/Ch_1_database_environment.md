<small>[Return Home](../../README.md)</small> | <small>[Return to Database Environment Main Page](index.md)</small>

* A Database not only contains data but 
  
| Keyword       | Definition                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------- |
| `Database` | Hide details and give us the ability to talk about problems at a higher (more abstract) level. |


Entity-Relationship model
* Entities 
* Relationships
* Attributes

### Attributes
* Smallest division of data
  * First Name
  * Social security number (number loses meaning if it doesn't have all the digits)
  * Bad examples:
    * Address 
      * City, street, zip code
    * Car
      * Make, model, year
* If you can break up an attribute you should
  * Name can be split into first and last name

### Entities
  * Things in the database
    * People
    * Locations
    * Inventory for a character in a game
  * Composed of attributes
    * Columns in the table
    * 1 or more
  * Stored together in tables
    * Row in a table

### Relationships
* Relations between entities
* Connect entities to other entities
* Can be built into entity tables or can be its own table
* Examples:
  * Employees can work in many departments
  * Managers can manage one department
  * Students can be in many classes
  * A class must be in at least one department
  * A transaction must be associated to one customer 

* 1 to Many relationship (A person can only have one homeworld, a homeworld can have many people)
<img src="./../../images/datarelationships.jpg">

* Many to many relationships

<img src="./../../images/manytomany.jpg">