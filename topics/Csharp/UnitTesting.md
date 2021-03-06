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

## External Dependencies

- You should not test external dependencies in unit tests, that is for integration tests
- Create a fake object to replace an external dependency

## Loosely-Coupled design

- Can replace one object with another at run-time
- When you use the `new` operator of another class in a class you make those classes tightly coupled
  - You should pass an parameter with that interface either as an argument or through the constructor

### Dependency injection

- Inject/supply dependencies of a class from the outside to create loosely coupled code

Three types:

- Injection via method parameter
- Injecttion via class property
- Injection via constructor
  - Most dependency injection frameworks support injection via constructor (NInject, Autofac are examples)

<img src="../.././images/dependencyinjection.jpg" width="500px">

<img src="../.././images/builddependency.jpg" width="500px">

### Mocking framework

- Help create fake/mock objects
- Moq, NSubstitute, FakeItEasy ect.
  - Moq is used in FC

Look at moq documentation!

- Use mocks only for external dependencies

* Testable source code
* Full coverage of tests
* Simpler implementation (not over-engineering)
