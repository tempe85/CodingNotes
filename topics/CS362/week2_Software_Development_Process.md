## Software Development Process

- Requirements
- Design
- Implementation
- Verification
- Maintenance

### REQUIREMENTS

- Team must determine what the software must do.
  - Interview stakeholders to determine needs
  - Create user stores and use cases to determine how software will be used and how it needs to function
  - Functional requirements (what software _will_ do)
  - Non-functional requirements (how software needs to perform)

### DESIGN

- Layout of architecture of the program
  - e.g. RESTful API
  - Document to be referenced during coding of project

### IMPLEMENTATION

- Where the coding happens
  - Craft solution to meet requirements

### VERIFICATION

- Ensure implementation meets the requirements

### MAINTENANCE

- After software is released
  - Fix bugs
  - Add new features

## SOFTWARE TESTING

- The process in which you try to generate a fail state in the software with the ultimate goal of being unsuccessful in doing so.

| Keyword              | Definition                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `Failure`            | Deviation from expected behavior. Occurs because there is a fault in the code                                    |
| `Fault`              | An instance of incorrect code that can lead to a failure. A fault is introduced when a programmer makes an error |
| `Error`              | A mistake that introduces a fault (typo/conceptual misunderstanding)                                             |
| `Regression testing` | Using pre-written tests that were known to pass                                                                  |
| `Random testing`     | Randomly generate inputs to use for a test                                                                       |
| `Unit testing`       | When the smallest component of a software system is verified to produce the expected behavior                    |
| `Black box testing`  | Finding a bug without ever looking at the source code                                                            |

- A test can help identify when the program does not behave as intended (failure) and therefore indicates a fault exits

### Why is testing important?

#### Reasons for you

- Saves time in long run. Testing can help identify problems early and reduce troubleshooting
- Fewer bugs after release
- Makes you look like a rock star because it can help increase your productivity

#### Reasons for co-workers/employer

- Saves money
- Protects from teammate mistakes
- Happier customers.

#### User reasons

- Security. Users have more trust in application.
- Quality of life. Bad for users when certain apps fail.
- Life and death. Some bugs can hurt/kill users.

### TYPES OF TESTING

- Functional Testing
  - Tests whether software meets requirement specs. Does it do what it is expected to do?
  - TYPES
    - Unit testing
    - Integration testing
    - Regression testing
- Non-functional Testing

  - Verifies the software performs at required levels. Peformance (loading speed), usability (easy navigation), reliability (system recovers from failures), and robustness (# active users).

  - TYPES
    - Performance testing
    - Scalability testing
    - Usability testing

* We will focus on automated testing (let the softare do the tests for us)

## TESTING FRAMEWORK

A set of tools which generally provide the following functionality:

- _Test fixture_ - A way to set up the elements required for a test and then roll back the setup when the test is done
- _Test case_ - A way to test a particular unit of software with a specific input for a given response
- _Test suite_ - A collection of test cases
- _Test runner_ - A way to execute the tests and report the results

### unittest module

- A python testing framework
- Comes with all python installations

Test Cases

- assertEqual(a,b) - `a == b`
- assertNotEqual(a,b) - `a != b`
- assertTrue(x) - `bool(x) is True`
- assertFalse(x) - `bool(x) is False`
- assertIs(a, b) - `a is b`
- assertIsNot(a, b) - `a is not b`
- assertIsNone(x) - `x is None`
- assertIsNotNone(x) - `x is not None`
- assertIn(a, b) - `a in b`
- assertNotIn(a, b) - `a not in b`
- assertGreater(a, b) - `a > b`
- assertLess(a, b) - `a < b`

Docs here: https://docs.python.org/3/library/unittest.html#test-cases

NOTE: Tests will stop running as soon as any of the asserts fail
