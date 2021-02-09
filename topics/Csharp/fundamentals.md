<small>[Return Home](../../README.md)</small> | <small>[Return to C# Main](index.md)</small>

### Strings
* String format
    * Uses indexes
```csharp
string name = string.Format("{0} {1}", firstName, lastName);
```

* String join
```csharp
var numbers = new int[3] { 1, 2, 3 };
string list = string.Join(",", numbers);
```

* Verbatim string
    * \ does not escape in a verbatim string
```csharp
string path = @"C:\projects\folder1";
```

### Enums

* Converting a string to an Enum type. 
```csharp
public enum ShippingMethod 
{
	Express = 1,
	Regular = 2,
}

var methodName = "Express";
var convertedType = (ShippingMethod)Enum.Parse(typeof(ShippingMethod), methodName);
```

### Stack/Heap
<img src="../.././images/stack_heap.png" width="700px">

