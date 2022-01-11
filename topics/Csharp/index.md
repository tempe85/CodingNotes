<small>[Return Home](../../README.md)</small>

# `C #`

- [DotNet](./dotnet.md)
- [Razor Pages](./razor.md)

`typeof()`

- Must be the name of a type or a type parameter. Doing type testing the type must match exactly (==)
  Can use `GetProperty()` method from this

## Lazy loading

- Why lazy loading? We can mark specific navigationproperties or even whole entities as 'lazy' by making them **_virtual_**.

## Eager Loading

[When to use include in Entity Framework](https://foreverframe.net/when-use-include-with-entity-framework/)

- The Process whereby a query for one type of entity also loads related entities as part of the query, so that we don't need to execute a separate query for related entities. Eager loading is achieved using the `Include()` method.

```csharp
            var stud1 = ctx.Students.Include(s => s.Standard)
                            .Where(s => s.StudentName == "Bill")
                            .FirstOrDefault<Student>();
```

- In this example, we get all the students from the database along with its standards

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

- We add an `Include()` linq method here because we're telling Entity Framework to query and get our books while getting our authors (using lazy loading by default we would only get our authors and not query the books at the same time!). We explicitly say to get our books because we're going to need them shortly and it's wasting time not to do both at once.

## Nulls In C#

### Value and Reference type overview

- Value
  - C# struct
  - Indpendent instances/copies
  - Value change doesn't affet other copies
  - Value **is** the information
  - No reference, cannot be null
  - No need to check for nulls
- Reference
  - C# class
  - Single shared instance
  - Value change affects people (references) pointing to it
  - The reference **points to** the information
  - Referene may point to "nothing" (null)
  - Null checking code may be required

A **value type** may sometimes need to additionally represent a null value.

> Nullable types are instances of the `System.Nullable<T>` struct. A nullable type can represent the correct range of values for its underlying value type, **plus an additional null** value.

```csharp
    public int? DaysSinceLastLogin { get; set; }
    public DateTime? DateOfBirth { get; set; }

    public PlayerCharacter()
    {
      DateOfBirth = null;
      DaysSinceLastLogin = null;
    }

```

- In this exmple both `DaysSinceLastLogin` and `DateOfBirth` are value types (structs) but are nullable using `?`

#### String methods to check for null/empty/whitespace values

```csharp
string name = "Sarah"; //reference type
string name = null;
string name = ""; //Empty string
string name = "   "; //whitespace string
```

```csharp
//Checks:
if(name == null) {...}
if(string.IsNullOrEmpty(name)) {...}
if(string.IsNullOrWhiteSpace(name)) {...}
```

#### `Nullable<T>` exposes these extension methods:

`.HasValue`: false if null, true if valid value

`.Value`: gets underlying value. If no value you will get a runtime exception.

`.GetValueOrDefault()`: underlying value or default

`.GetValueOrDefault(default)`: Value or specified default

#### Converting from Nullable`<T>`

Implicit conversion from T --> Nullable`<T>`

```csharp
int i = 42;
int? j = i; // no explicit cast required
```

Explicit conversion from Nullable`<T>` ---> T

```csharp
int? i = 42;
int j = i; // error, invalid cast

int j = (int)i; //explicit cast
```
