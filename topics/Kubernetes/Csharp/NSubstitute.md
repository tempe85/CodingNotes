```csharp
      var callCount = 0;
      _processor.CreateWidgitAsync(Arg.Is<TestModel>(p =>
        ((Test2Model)p).EqualsModel() &&
        (expectedData.Any(d => d.OrderBy(d => d).SequenceEqual(p.Ids).OrderBy(d => d)))),
      id: Arg.Any<string>()).Returns(p =>
      {
        callCount++;
        var widgits = expectedWidgitIds.Take(callCount).Select((p, i) => new Widgit() { WidgitId = expectedWidgitIds[i] });
        return expectedResponse with { WidgitId = expectedWidgitIds[callCount - 1] };
      });
```
