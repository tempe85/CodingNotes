<small>[Return Home](../../README.md)</small> | <small>[Return to Eloquent JS](index.md)</small>

### Request

```shell
GET /18_http.html HTTP/1.1
```

- `HTTP/1.1` is the version of the HTTP protocol being used
- `/18_http.html` is the resource the request is being applied to

### Response

```shell
HTTP/1.1 200 OK
```

#### Response header

```
Content-Length: 65585
Content-Type: text/html
Last-Modified: Thu, 04 Jan 2018 14:05:30 GMT
```

- Html document
- 65585 bytes in size
- Client and server are usually able to decide what to put in a header
  - Host name is required

### Browser and HTTP

```html
<form method="GET" action="example/message.html">
  <p>Name: <input type="text" name="name" /></p>
  <p>Message:<br /><textarea name="message"></textarea></p>
  <p><button type="submit">Send</button></p>
</form>
```

- Information in the form is added to the GET request at the end of the action url as a `query string`

```
GET /example/message.html?name=Jean&message=Yes%3F HTTP/1.1
```

- `?` signifies the end of the path of the URL and start of the query
- `&` seperates the parameters
- `%3F` is an ecoded character
  - In this case it is an encoded `?`

```javascript
console.log(encodeURIComponent("Yes?"));
// → Yes%3F
console.log(decodeURIComponent("Yes%3F"));
// → Yes?
```

- In the form example, if the request was a POST, it will put the the query string in the body of the request, rather than adding it tot he URL

### Fetch

```javascript
fetch("example/data.txt").then((response) => {
  console.log(response.status);
  // → 200
  console.log(response.headers.get("Content-Type"));
  // → text/plain
});
```

- New in JS, uses promises
- Returns a `promise` that respolves into a response.

```javascript
fetch("example/data.txt")
  .then((resp) => resp.text())
  .then((text) => console.log(text));
// → This is the content of data.txt
```

- To get the content of a response, you can use its text method, to get access to it as soon as the response headers have been received (which will come earlier than the response body, which is why it in itself returns a promise)

### HTTP Sandboxing

- Browsers protect users by not allowing scripts to make HTTP requests to other domains.
- Servers can include a header in their response to explicitly indicate to the browser it is ok for the quest to come from another domain

```
Access-Control-Allow-Origin: *
```

`Remote procedure calls`

- Communication follows pattern of normal funciton calls, except that the function is actually running on another machine
- Calling the function involves making a request to ther server that includes the function's name and arguments, and the response contains the function's return value

`Build communication around resources and HTTP methods`

- Instead of a remote procedure called `addUser` you use a PUT request to /users/larry
- INstead of encoding the user props in function args, you define JSON doc format that represents a user

### HTTPS

- Before exchanging data, the client verifies that the server is who it claims to be by asking to prove that it has a crypto certificate issued by a certificate authority that the browser recognizes.

### Form focus

- Form fields can get keyboard focus
- Can control the focus from JS with `focus` and `blur` methods.
  - First sets the focus and second removes focus

```javascript
document.querySelector("input").focus();
console.log(document.activeElement.tagName);
// → INPUT
document.querySelector("input").blur();
console.log(document.activeElement.tagName);
// → BODY
```

- can use `autofocus` attribute
- selecting a new focus with the `tab` key can be influenced using the `tabindex` attribute e.g. `tabindex=1`
  - By default most elements cannot be focused but you can add a `tabindex` attribute to any element and it will make it focusable
    - A value of -1 will make that element be skipped with tabing

### Reading a file

```html
<input type="file" multiple />
<script>
  ...
</script>
```

```javascript
let input = document.querySelector("input");
input.addEventListener("change", () => {
  for (let file of Array.from(input.files)) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log("File", file.name, "starts with", reader.result.slice(0, 20));
    });
    reader.readAsText(file);
  }
});
```

- Since reading a file from disk can tak time, the interface must be async to avoid freezing the doc
- Reading is done through the `FileReader` object, registering a `load` event handler

### Storage

```javascript
localStorage.setItem("username", "marijn");
console.log(localStorage.getItem("username"));
// → marijn
localStorage.removeItem("username");
```
