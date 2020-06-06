<small>[Return Home](../../README.md)</small> | <small>[Return to CS 290](index.md)</small>


# Node JS
* Node JS adds non-block I/O so you can access the file system while sending data over the inernet. 
* Makes it easy to add modules or packages taht are things that add additional functionality. 

* Express
  * Framework for making web apps. Adds functionality around mapping URLS from HTTP requests to resources and adds to `request` and `response` objects to facilitate handling HTTP requests 
* Express Handlebars
  * Injects content into HTML pages.
* Express sessions
  * Saves data about a client accessing the server on several requests. 
  * Client log to rememebr they are logged in
* Body Parse
  * Parses bodies of requests sent by the client
  * Simplifies getting form data
* MySQL
  * Package that lets you connect to a MySQL database

```javascript
var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
```
* `require('http')` imports the `http` module. 
* `http.createServer`, takes a function as an argument that serves as an event listener for incoming requests
* `writeHead` sets the status code and let's us set header info 
* `listen` calling this method allows us to set the port we want to listen on

## NPM
* Node package manager
* Manages package dependencies 
* uses `package.json` file for config
* Use: `npm install [package-name] --save`, the --save will add the package to package.json

# Express JS
* Framework built on top of Node.JS
* Designed to make it easier to write web apps
* Helps with requests/responses


```javascript
var express = require('express');

var app = express();

app.set('port', 3000);

app.get('/',function(req,res){
  res.type('text/plain');
  res.send('Welcome to the main page!');
});

app.get('/other-page',function(req,res){
  res.type('text/plain');
  res.send('Welcome to the other page!');
});

app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
```
* The order matters (this is especially important for the generic front page)
* Calling the `express` method return an express applciation. 
* `set` allows us to set a variety of variables, often global settings for the app
* `port` is an arbitrary name we use to globally reference what port we will use (just a property of the object)
  * In `app.listen` we do a get to get the port we set, which is in this case the number 3000
* `use` mounts middleware at a specified path
  * `use` is generic compared to a `get` or a `post`
  * The path is what the request is asking for
  * Mounting means that we are putting something on that path so when it is requested the thing we mounted is used. 
  * Middleware gets called when a reqest is made, there can be multiple amounts of middleware that does something to a request or response and then lets express know to call the next piece of middleware
* The two `use` statements
  * The first
    * Takes two (at most 3) arguments: `req`, `res` and optionally `next`
    * The `next` argument lets can let express know to move on to the next middleware
    * In this case that does not happen because the error 404 is at the end of the line, and next is never called
  * The second
    * Takes four arguments
    * The general error handler, non-error handlers only have 3 arguments at most
* `Listen` method
  * Use `get` to retrieve the port value
  * The second argument is a callback to call when the server is started, which in this case is just a log

## Hello Handlebars
* You will use Node.js, express.js and Handlebars everywhere in your server side work
* A templating system
  * Templates let us take an html template and set the content of elements

```html
<!doctype html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
  {{{body}}}
  </body>
</html>
```

* Template example
* Everything is fixed except the `{{{body}}}`. Handlebars will replace this with whatever is passed in when the page is rendered in JS. 

```html
<div class="entry">
  <h1>{{title}}</h1>
  <h2>By {{author.name}}</h2>

  <div class="body">
    {{body}}
  </div>
</div>
```
```javascript
var context = {
  title: "My First Blog Post!",
  author: {
    id: 47,
    name: "Yehuda Katz"
  },
  body: "My first post. Wheeeee!"
};
```
* Example of a template and sending in values for the template

### Setting up Handlebars
```javascript
var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/',function(req,res){
  res.render('home.handlebars') //We can omit the .handlebars extension as we do below
});

app.get('/other-page',function(req,res){
  res.render('other-page');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
```
* Calling the apps `engine` method sets the `handlebar.engine` to the thing that handles any file extension with `.handlebars`
* Setting the apps `view engine` to `handlebars` lets us omit the file exptention when we make calls later in the app. 
  * This is because we are basically telling express that our render methods will use handlebars files
* Now instead of calling `send` we call `render` and pass it a view instead of a hard coded string

## Form Handling

### Get Requests
  * Handling of get requests is baked into Epxress

```javascript
app.get('/show-data',function(req,res){
  var context = {};
  context.sentData = req.query.myData;
  res.render('show-data', context);
});
```

```html
<h1>The data you sent in the variable myData is: {{sentData}}</h1>
```

### POSTs
* Need to access the POST body.
* Need to add a 'body-parser' middleware 

```javascript
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); //middleware used for url encoded requests
app.use(bodyParser.json()); //middleware used for requests with a json body

app.post('/post-loopback', function(req,res){
  var qParams = [];
  for (var p in req.body){
    qParams.push({'name':p,'value':req.body[p]})
  }
  console.log(qParams);
  console.log(req.body);
  var context = {};
  context.dataList = qParams;
  res.render('post-loopback', context);
});
```
* Express will aut-detect which parser to use based on the content type. 