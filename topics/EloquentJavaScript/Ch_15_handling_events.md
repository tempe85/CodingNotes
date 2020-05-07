<small>[Return Home](../../README.md)</small> | <small>[Return to Eloquent JS](index.md)</small>

# Handling Events

### Event Handlers

|Keyword | Definition|
|-------|------------|
|`Polling` | Properties that contain functions
|`Stack` | A data structure that allows you to push values into it and pop them out again in the opposite order (LIFO). 
|`Serialize`| Convert into a flat description

```javascript
  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    console.log("Button clicked.");
  });

```
* You can give a node an `onclick` attribute with a similar effect, but only one per node
* `addEventListener` allos you to add any number of handlers even if it has other handlers on the element
* Call `removeEventListener` to remove a handler

```javascript
  let button = document.querySelector("button");
  button.addEventListener("mousedown", event => {
    if (event.button == 0) {
      console.log("Left button");
    } else if (event.button == 1) {
      console.log("Middle button");
    } else if (event.button == 2) {
      console.log("Right button");
    }
  });
```
* This determines which mouse button was clicked

### Propogation 
* If a button was clicked in a paragraph where both had a handler, then the more specific handler (this case the button) goes first.
  * The event `propogates` from there going up to the parent node and all the way to the document root. Afterwards the window gets a chance to respond to the event. 
  * Using `stopPropagation` you can prevent the handlers from moving further up the tree. 

```javascript
  window.addEventListener("keydown", event => {
    if (event.key == " " && event.ctrlKey) {
      console.log("Continuing!");
    }
  });
```
* Can even handle multi key press

>To get precise information about the place where a mouse event happened, you can look at its clientX and clientY properties, which contain the event’s coordinates (in pixels) relative to the top-left corner of the window, or pageX and pageY, which are relative to the top-left corner of the whole document (which may be different when the window has been scrolled).

```html
<style>
  body {
    height: 200px;
    background: beige;
  }
  .dot {
    height: 8px; width: 8px;
    border-radius: 4px; /* rounds corners */
    background: blue;
    position: absolute;
  }
</style>
<script>
  window.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
  });
</script>
```
* A simple drawing program