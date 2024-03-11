<small>[Return Home](../../README.md)</small> | <small>[Return to C# Main](index.md)</small>

## JSON

JSON.NET INFO: https://www.newtonsoft.com/json/help/html/Introduction.htm

`The quickest method of converting between JSON text and a .NET object is using the JsonSerializer. The JsonSerializer converts .NET objects into their JSON equivalent and back again by mapping the .NET object property names to the JSON property names and copies the values for you.`

Serializing/Deserializing JSON reference: https://www.newtonsoft.com/json/help/html/SerializingJSON.htm

### JsonConvert

- When you want to convert to and from a JSON string
  - `SerializeObject()`, `DeserializeObject()`
  - Easy to use
  - Can still use JsonSerializerSettings as an overload

```csharp

Product product = new Product();
product.Name = "Apple";
product.ExpiryDate = new DateTime(2008, 12, 28);
product.Price = 3.99M;
product.Sizes = new string[] { "Small", "Medium", "Large" };

string output = JsonConvert.SerializeObject(product);
//{
//  "Name": "Apple",
//  "ExpiryDate": "2008-12-28T00:00:00",
//  "Price": 3.99,
//  "Sizes": [
//    "Small",
//    "Medium",
//    "Large"
//  ]
//}

Product deserializedProduct = JsonConvert.DeserializeObject<Product>(output);
```

### JsonSerializer

- When you want more control over the serialized object than JsonCovnert
- Reads/writes JSON text to a stream via `JsonTextReader`/`JsonTextWriter`
- `JTokenReader`/`JTokenWriter` converts to and from LINQ to JSON objects
- `BsonReader/BsonWriter` to convert to and from BSON
  - BSON is binary JSON
  - BSON supports some non-JSON data types like dates and binary data
  - MongoDB uses BSON format, but you can still can represent MongoDB collections as JSON (which is converted to BSON representation for you)
  - More info here: https://www.mongodb.com/json-and-bson

```csharp

Product product = new Product();
product.ExpiryDate = new DateTime(2008, 12, 28);

JsonSerializer serializer = new JsonSerializer();
serializer.Converters.Add(new JavaScriptDateTimeConverter());
serializer.NullValueHandling = NullValueHandling.Ignore;

using (StreamWriter sw = new StreamWriter(@"c:\json.txt"))
using (JsonWriter writer = new JsonTextWriter(sw))
{
    serializer.Serialize(writer, product);
    // {"ExpiryDate":new Date(1230375600000),"Price":0}
}

```

## JSON Attributes

References:

- [Json.NET](https://www.newtonsoft.com/json/help/html/SerializationAttributes.htm)

`Attributes can be used to control how Json.NET serializes and deserializes .NET objects`

### JsonObject attribute

Reference: https://www.newtonsoft.com/json/help/html/T_Newtonsoft_Json_MemberSerialization.htm

- Placed on object to control how they should be seralized as a JSON object

```csharp
[JsonObject(MemberSerialization.OptIn)]
public class Person
{
  ...
}
```

- `OptIn`: Only members marked with `JsonProperty` or `DataMember` attribute are serialized.
- `OptOut`: All public members are serialized by defualt. Can use `JsonIgnore` or `NonSerialized` attribute to opt out. OptOut is the **default** serialization mode.

### JsonProperty attribute

Reference: https://www.newtonsoft.com/json/help/html/Properties_T_Newtonsoft_Json_JsonPropertyAttribute.htm

- Placed on fields and properties to control how they should be serialized as a property in a JSON object.

Common Properties:

- `Required`- Indicates if property is required
- `NullValueHandling` - Set to ignore so that properties with a default value aren't included in the JSON result.

```csharp
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    public Person Partner { get; set; }
    public decimal? Salary { get; set; }
}

Person person = new Person
{
    Name = "Nigal Newborn",
    Age = 1
};

string jsonIncludeNullValues = JsonConvert.SerializeObject(person, Formatting.Indented);

Console.WriteLine(jsonIncludeNullValues);
// {
//   "Name": "Nigal Newborn",
//   "Age": 1,
//   "Partner": null,
//   "Salary": null
// }

string jsonIgnoreNullValues = JsonConvert.SerializeObject(person, Formatting.Indented, new JsonSerializerSettings
{
    NullValueHandling = NullValueHandling.Ignore
});

//ALTERNATIVE:

public class Person
{
    public string Name { get; set; }

    public int Age { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public Person Partner { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public decimal? Salary { get; set; }
}


Console.WriteLine(jsonIgnoreNullValues);
// {
//   "Name": "Nigal Newborn",
//   "Age": 1
// }

```
