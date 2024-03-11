## Black box testing

| Keyword             | Definition                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| `Black box testing` | When you write tests based purely on the description provided for the softare (a.k.a. the specification) |

- Specs are established during the requirements phase. We need to verify that our design meets the requirements.

### Advantages of Black Box Testing

- Focuses on input domain of software
  - Allows targeted testing of possible inputs
- No need for actual code
  - Non-devs can write tests
  - Tests can be be written **before** actual code
  - Allows for unbiased tests by separating tester from developer
- Can catch logic errors other types of tests cannot
- Can be used at all levels of testing: unit testing, integration testing, ect.

### Disadvantages of Black Box Testing

- Isn't posisble to test every possible input, so may miss logic branches/program paths untested
- No way to know why the failure occurs, just that the failure indicated a fault
- Poorly written specs can lead to inaccurate tests

## BLACK BOX TECHNIQUES

### Random Testing

- Input domain can be very large and difficult to test each case by hand
- Advantages
  - Quick to write
  - Can cover large portions of input domain with little code
  - Tests have no bias
    Can potentially generate an input that no one considered
- Disadvantages
  - Many random inputs fall under same 'test case' so are redundant
  - May not test tricky parts of input, e.g. _edge cases_
  - With no targeting, random inputs can miss glaring errors
  - Randomly selecting inputs for each run can make som runs pass while others fail

### Boundary Testing

- Based on idea that errors are more likely to be introduced around the boundaries of the input domain.
  - If spec says user needs to inptu a password 8-16 characters long, where is it most likely a dev makes an error and introduces a fault? (Answer: test 7,8, 16 and 17)

### Partition Testing

- Goal is to identify sub-domains that can allow for more intelligent testing, but with fewer test cases to cover entire input domain.
  - Inputs within each sub-domain share an `equivalence`
- Often referred to as `equivalence partitioning`

Example:

- Password must have the following criteria
  - Length between 8-16
  - contain one special character
  - contain one upper and one lowercase letter
  - contain one number

* It is important to test each requirement by themselves however we should also test all combinations of features we identify
* Each combination represents a sub-domain
* This can still produce a number of combinations that isn't realistically implementable

## CATEGORY PARTITION METHOD

http://barbie.uta.edu/~mehra/7%20The%20category-partition%20method%20for%20specifying%20and%20generating%20fuctional%20tests.pdf

- Georgia State Software Testing videos
  https://www.youtube.com/watch?v=1x-c5d8iUhc&list=PLAwxTw4SYaPkoQFThzsc9e7Fe3QV_KJCs

1. Identify independently testable features
   - Take software spec and identify individually testable units. Identifying unit tests
2. Identify **categories**
   - A category is a way of describing an input.
     - In the password example the input is a string. We can describe this with **length** and **content**, which are both _categories_ of this testable feature.
3. **Partition** categories into choices
   - Identify subdomains by identifying unique cases that are likely worth testing, e.g. edge cases.
   - length
     - 0, 7, 8 ect.
   - content
     - all numbers, all lowercase, all special characters, ect.
4. Identify constraints among choices
   - Combine subdomains/choices together.
     - Some combinations don't make sense. No reason to test more than a single combination that is `length: 0`. Helps eliminate number of possible test cases.
5. Produce/Evaluate test case specifications
   - Categories' choices are combined according to the identified constraints to produce _test frames_. We take all the possible subdomains for each category and match them up with subdomaines of other categories. we then use constraints to eliminate some combinations, we are left with choice combinations (e.g. passwords of length with all numbers) which are called `test frames`.
     - A test frame is a formal description of a test case.
   - We need to evalute test frames by realizing that there are too many test frames to realistically implement. Re-examine constraints, choices and even categories.
   - There are tools that can automate test frame generation
6. Generate test cases from test case specifications
   - Convert test frames into actual tests

TSLGenerator docs:
https://github.com/alexorso/tslgenerator/blob/master/Docs/TSLgenerator-manual.txt
