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

# Types of Tests

- Unit tests
  - Tests unit of an app without external dependencies (class or multiple classes)
  - This should be the test type you use the most
- Integration test
  - Tests app with external dependencies
  - Cover unit test gaps with these tests
- End-To-End-Tests
  - Drives an app through its UI
  - Don't write many of these (key functions)

Main test libraries: xUnit, NUnit, MSTest

## TDD (Test Driven Development)

- Write the test before you write your code

1. Write Failing test
2. Write simplest code to make the test pass
3. Refactor if necessary

Benefits:

- Testable source code
- Full coverage of tests
- Simpler implementation (not over-engineering)
