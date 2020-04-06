<small>[Return Home](../../README.md)</small>

# `C #`

`typeof()`

- Must be the name of a type or a type parameter. Doing type testing the type must match exactly (==)
  Can use `GetProperty()` method from this

## Lazy loading
* Why lazy loading? We can mark specific navigationproperties or even whole entities as 'lazy' by making them ***virtual***.  

## Eager Loading

[When to use include in Entity Framework](https://foreverframe.net/when-use-include-with-entity-framework/)
- The Process whereby a query for one type of entity also loads related entities as part of the query, so that we don't need to execute a separate query for related entities. Eager loading is achieved using the `Include()` method.

```csharp
            var stud1 = ctx.Students.Include(s => s.Standard)
                            .Where(s => s.StudentName == "Bill")
                            .FirstOrDefault<Student>();
```
* In this example, we get all the students from the database along with its standards 

```csharp
class Program
{
    static void Main(string[] args)
    {
        using (var context = new BookStoreContext())
        {
            var author = context.Authors
                .Include(a => a.Books)
                .FirstOrDefault();
           
            foreach (var book in author.Books)
                Console.WriteLine(book.Title);
        }
        Console.ReadLine();
    }     

```
* We add an `Include()` linq method here because we're telling Entity Framework to query and get our books while getting our authors (using lazy loading by default we would only get our authors and not query the books at the same time!). We explicitly say to get our books because we're going to need them shortly and it's wasting time not to do both at once. 