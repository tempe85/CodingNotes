<small>[Return Home](../../README.md)</small> | <small>[Return to CS 290](index.md)</small>

# JavaScript and the DOM

| Keyword                 | Definition                                                                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document object model` | Representation of a web page that JS has access to. It is how you interact with the page displayed by the browser using JS. Allows you to change elements. |

## The DOM

- Model that the browser uses to render a web page. First step is to render a page is to parse the HTML and create the DOM from it. The browser will then render the page by rendering each node of the DOM.
- Access nodes
  - The main purpose of the DOM is to access nodes in the HTML doc.
  - Also access the child nodes of the node you are accessing.
- Document traversal
  - Moving through list of nested lists for example.

## DOM Navigation

- Tree structure
  - Each node has one parent, each parent can have unlimited number of children.
  - If a node has no children it is called a `leaf`
  - Nodes with common parents are `siblings`
    - The order of sibilings is important because it determines what renders first
  - Single root node

## Traversing the DOM

- The DOM exposes a `parentNode` interface for any node with children.
  - `firstElementChild`
    - This is the first child node which is also an element node. This will ignore text nodes which can be really handy as you often want to ignore those node.
  - `lastElementChild`
    - Just like firstElementChild but is the last child node which is also an element node.
  - `nextElementSibling`
    - This contains the the next node which is both an element and a child of the same parent as the current node.
  - `previousElementSibling`
    - This contains the the previous node which is both an element and a child of the same parent as the current node.
  - `children`
    - This contains all the children which are element nodes.

### Searching for Nodes

- Can search by element class, id, or type

`document.getElementById`, `getELementsByTagName("div")`, `getElementsByClassName`

- NOTE: When you get back a collection of elements it is not in a traditional JS array form. Elements are modified in real time during a loop and if you remove or modify an element that will change the collection size during the loop.

### DOM Nodes

Node Properties:

- `textContent`
  - Contains content of a node in a string representation.
    - Setting this to `""` will clear all its text and child nodes.
- `style`
- `className`
  - Use `+= newClass` to add a new class (note the space)

#### Adding Text

- `createTextNode` or `textContent`

```javascript
var displayMe = "<span>Hello!</span>";

document.getElementById("html").innerHTML = displayMe;
document.getElementById("textContent").textContent = displayMe;

// Hello!
// <span>Hello!</span>
```

- If you want to update the content with text that includes HTML nodes that you do want parsed use `innerHTML`
  - The `<span></span>` tags were parsed and added to the DOM and not displayed.
  - `innerHTML` has security risks because people can inject HTML into your page.

#### Adding Elements

Creating:

- `document.createElement`

```javascript
var addMe = document.createElement("div");
```

- Won't exist in the DOM yet

Inserting:

- `appendChild`
  - Adds node as last child of the node the method was called from.

```javascript
document.getElementById("bigTable").appendChild(addMe);
```

#### Removing Elements

- Need to get reference to the element and its parent, then you can call `removeChild` from the parent node.

```javascript
var newList = document.createElement("ul");
for(var i = 0; i < 3; i++){
    var newItem = document.createElement("li");
    newItem.textContent = "I am item " + i + ".";
    newList.appendChild(newItem);
}
document.getElementById("listContainer").appendChild(newList);

newList.children[0].style.backgroundColor = "red";
newList.children[1].style.backgroundColor = "green";
newList.children[2].style.backgroundColor = "violet";

newList.children[1].className = "bigger";
newList.children[1].className += " yellow";

/*
var childList = newList.children;
console.log(childList.length);
newList.removeChild(newList.children[1]);
console.log(childList.length);
```

### EVENTS

- When a button is pressed that dispatches an event the event will 'bubble' up the DOM tree element by element. Anything that has an event handler for a click event will trigger.

```javascript
function changeColor() {
  var toUpdate = document.getElementById("changeMe");
  if (toUpdate.style.backgroundColor == "blue") {
    toUpdate.style.backgroundColor = "red";
  } else {
    toUpdate.style.backgroundColor = "blue";
  }
}

function unbindButton() {
  document.getElementById("myButton").removeEventListener("click", changeColor);
}

document.getElementById("myButton").addEventListener("click", changeColor);
document.getElementById("grimButton").addEventListener("click", unbindButton);
```

### Propogation and Defaults

- `event propogation`
  - An event will propogate up the tree until it hits the root, this can be prevented by calling `stopPropogation`
- `preventDefault`
  - Prevents the default action from happening.
  - Often used to stop a browser refresh when a form is submitted.

```javascript
function divClick(event) {
  document.getElementById("output").textContent = "Div was clicked";
}

function buttonClick(event) {
  document.getElementById("output").textContent = "Button was clicked";
  if (document.getElementById("propCheck").checked) {
    event.stopPropagation();
  }
}

function checkClick(event) {
  document.getElementById("output").textContent = "Checkbox was clicked";
  if (document.getElementById("defaultCheck").checked) {
    event.preventDefault();
  }
}

document.getElementById("check").addEventListener("click", checkClick);
document.getElementById("innerButton").addEventListener("click", buttonClick);
document.getElementById("buttonHolder").addEventListener("click", divClick);
```
* Because the button element is a child of the div element, if you do not `stopPropogation` then it will bubble up to the div event handler and trigger that event instead. 

### Load Events
* Called when a resource and all its dependent resources are done loading. 
  * If you want a resource as soon as its ready you can attach the handler to the `load` event.

```html
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });
</script>
```
* `DOMContentLoaded` will fire when the page is loaded. 

### Script Tags
```html
<script src="path/to/file.js"></script>
```
* Put immediately before the closing `</body>` tag.
  * This makes sure the entire page is parsed before the script is executed. 