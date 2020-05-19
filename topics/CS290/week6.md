<small>[Return Home](../../README.md)</small> | <small>[Return to CS 290](index.md)</small>

# Web APIs

- A way to get access to a library in order to use that library.
- Allows you to interact with tools remotely
- Interacting with the API is a lot like interacting with functions (passing stuff in the body or query can act like arguments in a function)

### Making calls

- Use GET/POST (among other) requests to get data back, typically JSON.
  - Use JSON.parse() to parse the returned data (converts JSON string to JS object)

### API Key

- Allows the server receiving the API request to know who is sending the request, this allows them to prevent people from flooding them with API requests.

## HTTP And JS

### AJAX

- Stands for Async JSON and XML (although XML is rarely used anymore)

#### GET Request

```javascript
var req = new XMLHttpRequest();
req.open(
  "GET",
  "http://api.openweathermap.org/data/2.5/weather?q=Corvallis,us&appid=fa7d80c48643dfadde2cced1b1be6ca1",
  false
);
req.send(null);
console.log(JSON.parse(req.responseText));
```

- `XMLHttpRequest` is an object that can make an HTTP request and return the data.
  - Similar to file stream in C++.
  - Opens a connection to a resource maybe sends it data, maybe gets some data
  - Third argument in `open()` is whether the call is async
  - `null` in `send()` is where the request body would go.

#### POST request
* In general POST requests create data and GET requests retrieve data

```javascript
      var req = new XMLHttpRequest();
      req.open("POST", "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAh2sUzWPm-pRQCbgyZijqWcKGFcoXeK2o", false);
      req.setRequestHeader('Content-Type', 'application/json');
      req.send('{"longUrl":"http://www.oregonstate.edu"}');
      console.log(JSON.parse(req.responseText));
```

### Forms with Ajax and JS
* Use `JSON.stringify` to make a JS object into a JSON string.

| XMLHttpRequest Object | Definition                            |
| ------- | ------------------------------------- |
| `responseText` | Content of the stuff sent back to us |
|`status`|Integer representing the HTML status code. Numbers in 200s are good, 400s/500s measn something went wrong
|`statusText`|Message server gave elaborating on the status. e.g. '200 OK' or '404 Not Found'
|`readyState`|Lets you know how far along in the process the request has gotten. (UNSENT/OPENED/HEADERS_RECEIVED/LOADING/DONE)

## Asynchronous Requests
* The way async calls work is via callback functions
  * Callback functions 'call you back' when they are done while you are still doing work
  * Can use the `load` event in Ajax for async requests
  * We register a callback before we send the request
    * If something needs to access the response it **must be in the callback function or a function the callback calls** 

## Promises
* A promise has three states:
  * Pending
  * Fulfilled
  * Rejected
  
```javascript
//Making a promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);
//Chaining the promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};
```

* If a function returns a promise, you are chaining promises. 

Using Async/Await style:
```javascript
async function askMom() {
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking mom');
    }
    catch (error) {
        console.log(error.message);
    }
}
//must also await when calling the function
(async () => {
    await askMom();
})();

```
<img src="./../../images/promises.png">