<small>[Return Home](../../README.md)</small> | <small>[Return to Eloquent JS](index.md)</small>

# Chapter 13

## JavaScript and the Browser

#### Network and the Internet

| Keyword            | Definition                                                     | Description                                                                                                                                                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Network protocol` | A style of communication over a network                        | Sending email, sharing files, controlling computers                                                                                                                                                                                                                                            |
| `HTTP`             | Hypertext Transfer Protocol                                    | Retrieves named resources such as pictures/web pages                                                                                                                                                                                                                                           |
| `TCP`              | Transmission Control Protocol                                  | Protocol all computers on the internet use to allow for compunication. One computer (server) waits for another to talk to it. Each listener has a number (port) associated with it. Another computer (client) can establish a connection by connecting to the target using the correct port #. |
| `World Wid Web`    | Set of protocols and formats that allow us to visit web pages. | Uses Port 80 with HTTP protocol to transfer documents                                                                                                                                                                                                                                          |
| `URL`              | Uniform resource locator                                       | Each document on the web has one of these                                                                                                                                                                                                                                                      |
| `IP Address`       | Number used to send messages to another machine                | 149.210....                                                                                                                                                                                                                                                                                    |

```html
http:// eloquentjavascript.net/ 13_browser.html |--Protocol--| |-- server ---|
|-- path --|
```

- Path is the document you will retrieve

#### HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello, I am Marijn and this is my home page.</p>
    <p>
      I also wrote a book! Read it
      <a href="http://eloquentjavascript.net">here</a>.
    </p>
  </body>
</html>
```

- Document format for web pages
- Tags `<example></example>` give structure to the text.
- Document starts with `<!doctype html>` which tells browser to interpret the page as modern HTML.
- Head
  - Contains info about the document
  - Title
  - Encoding, e.g. UTF-8
- Body
  - The document itself
  - Text
  - Tags
    - `<p></p>`
    - `<a href="...." />`
      - Href is an attribute (hypertext reference)
- In HTML and ampersand `&` followed by a name or charater code and a `;` is called an `entity` and will be replaced by teh character it encodes.
  - `&lt;` - open angle bracket.
- Error-tolerant
  - When tags that should be there are missing, the browser reconstructs them

#### HTML and JavaScript

- `<script></script>` allows us to include JavaScript in a document.
  - Usually includes a src attribute to fetch a script file e.g. `<script src ="code/hello.js">`
  - Must always be closed with `</sript>` even if it doesn't contain code.
- You load `ES modules` in the browser by give your script a `type="module` attribute.

#### In the sandbox

- JS is limited in what it can do on your computer, isolating the programming environment is called `sandboxing`
- Can be exploited

#### Compatibility and the browser wars

- Lack of compatibility on webpages in early days of web.
- Bugs
