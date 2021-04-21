## Unit Test guidelines

- Each test should have a single responsibility and be short.
- No logic, or conditional statements. Logic can add unreliability to the test.
- Isolated from other tests
- No too specific/general

Types of methods:

- Queries
  - Returns a value
- Command
  - Makes a change in the system.
  - Make sure the right calls are being made
  - Make sure the right changes are being made

Don't test:

- C# language features
- 3rd party code

### Test naming conventions

`[MethodName]_[Scenario]_[ExpectedBehavior]`

- The number of tests required is usually greater than or equal to the number of execution paths of the method
