# WEEK 2 DART

### Starting a Dart project

- `dart create` will generate boiler-plate code
  - Creates a pubspec.yaml file that includes project meta data
    - Name and dependencies
- `dart create -t template-to-use my_project`
- Run with `dart run`
- Starting point of program is in `main()`

`const vs final`
_ Final means single assignment: A final variable or field must have an initializer. Once assigned a value, it cannot be changed. Final modifies `variables`
_ Const modifies `values`. Data must be calculated at compile time. It has no access to anything you need to calculate at runtime.

```dart
const time = DateTime.now(); //not valid
const time = 5; //valid

final time = DateTime.now(); //valid

```

- No constructor overloading in Dart, instead you use named constructors:

```dart
class Spaceship {

 int landingGears = 0;

 Spaceship() {
 this.landingGears = 0;
 }

 Spaceship.landable() {
 this.landingGears = 3;
 }

}
```

- Default paramaters for constructor

```dart
PlanetarySystem([this.name = "Unnamed System"]);
var withName = PlanetarySystem("New System");

//Named parameters
PlanetarySystem({this.name = "Unnamed System"});
var withName = PlanetarySystem(name: "New system");

//Named parameters that are required
PlanetarySystem({required this.name});
var withName = PlanetarySystem(name: "New system");
```

Loops:

- For, for-in, and forEach
