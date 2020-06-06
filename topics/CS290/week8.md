<small>[Return Home](../../README.md)</small> | <small>[Return to CS 290](index.md)</small>


# Sessions And HTTP

| Keyword   | Definition                                                                                                                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CORS`   | Cross Origin Resource Sharing. Prevents a browser from making an Ajax request to a server on a different domain than the one it is currently visiting.                                                                                                                                                                     |
| `Context` | Where a method has been called from                                                                                                                                                                          |
| `this`    | When invoking a method of an object instance, it lets you access the properties of that object instance. Specifies who is responsible for calling a function. Refers to the functions execution context.     |
| `bind`    | Method of a function (since a function is an object in JavaScript). Let's us specify an execution context for a function and lets us fix an arbitrary number of the first arguments passed to that function. |
| `closure` | A closure is created everytime a function is called where that function defines an internal function         

### CORS
* Server side HTTP requests are not affected by CORS. 

### Cookies
* Used to track movement from site to site if a site is set up to track that cookie
* Unencrypted cookies are privacy concerns

### Sessions 
* A session is essentially the data associated with a clients ID. 
* The server gets the ID and cross references it with a store of data to see what data is associated with it. 
* Local to the server, only the server see's the session
  * A cookie is stored both on the server and on the browser (allows it to identify itself to the server)
    * Cookie has a session id and an encrypted secret key, need the secret key to decrypt the the cookie
    * The cookie has size limitations (4kb)

### Problems with memory stores
* Server resets lose data
* Server load balancing means that the servers are going to have their own separate memory (one server may have the data and the other might not)

```javascript
...
var session = require('express-session');
...
app.use(session({secret:'SuperSecretPassword'}));
...
app.get('/count',function(req,res){
  var context = {};
  context.count = req.session.count || 0;
  req.session.count = context.count + 1;
  res.render('counter', context);
});
```
* `app.use(session({secret:'SuperSecretPassword'}))` Let's our app know we want to use sessions and we want to so with a new instance of `session`
  * Must pass it a secret
  * This creates an encrypted cookie to see if it's been tampered by the client (if they don't know the secret they can't re-encode it)
* `session` is an object which we can add props and values. Converted into JSOn and stored so anything that can be represented by JSON can be added to a session
* `session` is tied to the browser visiting, server automatically assigns new instances of sessions for each browser client

### Request flow
<ol>
<li>Client Creates a request (no cookie)</li>
<li>Server receives the request and creates a new session with a cookie and a sessionID</li>
<li>Server sends new session's cookie back to client udner the connect.sid name</li>
<li>Client makes request with connect.sid cookie</li>
<li>Server retrieves session associated with the value of the connect.sid cookie that the client sent</li>
</ol>
## Session Example
