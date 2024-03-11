# CREATING TESTING ENVIRONMENTS

* Use `setup()` to create the necessary conditions (dependencies) to run.  
* `setup()` is run for **all** tests in the TestCase class it is defined in. If tests require different setups, create different TestCase Classes for each. 
* Use `setUpClass()` to be called only once before the tests run. 

```python
class TestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
```
* ClassMethod decorator signals that this function is bound to the lass and not just a particular object. 
    * cls is sued instead of self for class methods. 

* Use `tearDown()` to clean up after the tests are run
    * Like `setup()` this is for each test in the class. 
* Use `tearDownClass()` if you only want something run once for all the classes tests rather than for each test. 

```python
@classmethod
def tearDownClass(cls):
...
```

# STUBS AND MOCKS

| Keyword                   | Definition                                                                                                                                                                               |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Stubs` | Contain predefined data that is returned when called, but do not imitate behavior.                                                                                             |
| `Mocks`          | Mocks simulate the behavior of a service and its actions can be verified. |

* The idea behind all `mocking` is to 'hijack' calls to dependencies and simulate responses and behaviors. 
* Stubs mimic, but have no idea what the things mean. 
    * Primary focus is on verification of data handling. 
    * Predefine responses to mimi a dependency (e.g. API response)
    * Mimic function calls, not full objects
* Mocks are better at mimicking human understanding. 
    * Allow for testing object behavior, not just data verification. 
    * Often simulate entire objects or interfaces
    * Self aware. Can tell you how many times they have been called. 
    