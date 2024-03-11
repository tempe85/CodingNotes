# CHAPTER 1

## FLUTTER

- Mobile SDK, built by Google
- Written in Dart
  - Dart can compile into JS
  - Object oriented
  - Flutter is a lbrary of Dart classes
  - Compiles directly into ARM code (native mobile code)
    - No JS bridge like is needed with React Native

### Widgets

- Small components
  - Everything in Flutter is a widget
- Dart classes that know how to describe their view
- Can describe any aspect of an apps view
- A majority of widgets are combinations of smaller widgets (composition over inheritance)
  - Wrapping a smaller widget with a higher order widget rather than inheriting from the smaller widget
- Life-cycle
  - `build()` is required in every widget
    - Similar to `render()` in react
    * The method you describe your view by returning widgets
- Stateful and stateless
  - Stateless
    - Just displays info and UI
  - Stateful
    - Manages state, tells Flutter when it needs to 'repaint' (render)
