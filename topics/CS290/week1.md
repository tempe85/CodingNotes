<small>[Return Home](../../README.md)</small> | <small>[Return to CS 290](index.md)</small>

# Week 1

### Web overview

- Client

  - `Client side` are things that happen within the browser without a need to contact a server.
    - Can also be programs.
  - Client asks for data

- Server
  - The thing the client is requesting data from. e.g. `google.com`, `localhost:3000`, `file:///D:example`.
  - Gets access to data only available to the server.
  - Server gives data

### Web languages

- Document structure

  - `HTML` (Hypertext Markup Language)
    - Defines document structure. Not responsible for **how** the document looks.

- Page look and feel

  - `CSS` modify's the layout and styling of a page.
  - Determines what a section looks like.

- Client side interactivity

  - `JavaScript`. Makes webpages dynamic.

- Server Side languages
  - PHP, C#, JS (Node.js), Ruby, GO, Python (Django).

### HTTP and TCP/IP

- TCP/IP
  - You can think of it like a telephone system. You dial a number to connect to a server, then you connect ot a port which is like an extension. A program waiting for that port to 'ring and then it will accep the transmission and start a conversation with the client.
- HTTP
  - Two parts: `request` and `response`.
  - Request
    - Gets sent from the browser to ther server. Composed of two parts: `headers` and `body`.
      - Often times the body is empty, unless data needs to be sent along to the server (e.g. a form)

<u>Example Request</u>

- Request Headers:

```python
POST /about HTTP/1.1 # Version of HTTP being used
Host: main.oregonstate.edu # Client sending the request to.
....
Accept: text/html,application/xhtml+xml,application/xml;q=0.9, image/webp,*/*;q=0.8 # Type of file the client is OK getting back from server. Ordered in preference. */* indicates any file will work.
Cookie: mp_fe42a3507c0.... #Info stored on client that is sent to server with every request. Keeps track of which clients are which by ther server.
Referer: http://main.oregonstate.edu/about # The page the client came from. Can be fooled (so server shouldn't use it for important things)
```

- Request body

```
term=foobar&op=Search&group_path=&form_build_id=form-i4fdI34k9NbfdPoXctJDBbagH31-y2MkKhTl0ZS-u4M&form_id=osu_search_top_hat_form
```

- Key value pairs: `key=value` and seperated by `&` symbol.
- Body is a summary.

<u>Example Response</u>

```python
HTTP/1.1 302 Found # Status code. Values < 400 are OK, > 400 not OK (usually)
....
Location: http://main.oregonstate.edu/search/osu/foobar/0/3/ # Where you end up after the server does its thing. Tells browser what to display in address bar.
Content-Type: text/html; charset=utf-8 # Type of data sent back. Tells browser if it has to parse HTML, display image or text.
Content-Length: 18 # How much data sent back in the response body. Can help with debugging since you can see how much data was expected vs. received
```

- Response body is just the content of a file

<u>Life-cycle of a Web Page</u>

1. User Clicks a link
   1. fires off an event that the browser responds to
2. Browser sends a request
   1. Headers + Body
3. Server responds to request
   1. Server looks for requested resource. Sends back a response
4. Client receives response
   1. Parses response. Response might tell client to get more files (and make more requests)
5. Client renders the page
   sdf
