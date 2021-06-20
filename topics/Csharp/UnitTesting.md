# Types of Tests
* Unit tests
  * Tests unit of an app without external dependencies (class or multiple classes)
  * This should be the test type you use the most
* Integration test
  * Tests app with external dependencies
  * Cover unit test gaps with these tests
* End-To-End-Tests
  * Drives an app through its UI
  * Don't write many of these (key functions)

Main test libraries: xUnit, NUnit, MSTest

## TDD (Test Driven Development)
* Write the test before you write your code

1) Write Failing test
2) Write simplest code to make the test pass
3) Refactor if necessary

Benefits:
* Testable source code
* Full coverage of tests
* Simpler implementation (not over-engineering)

## External Dependencies
* You should not test external dependencies in unit tests, that is for integration tests
* Create a fake object to replace an external dependency
  
## Loosely-Coupled design
* Can replace one object with another at run-time 
* When you use the `new` operator of another class in a class you make those classes tightly coupled
  * You should pass an parameter with that interface either as an argument or through the constructor

### Dependency injection
* Inject/supply dependencies of a class from the outside to create loosely coupled code

Three types:
* Injection via method parameter
* Injecttion via class property
* Injection via constructor
  * Most dependency injection frameworks support injection via constructor (NInject, Autofac are examples)

### Mocking framework
* Help create fake/mock objects
* Moq, NSubstitute, FakeItEasy ect.
  * Moq is used in FC

Look at moq documentation!
* Use mocks only for external dependencies