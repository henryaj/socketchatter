// This initialises 'app' to be a handler...
var app = require('express')();
// that's then supplied to an HTTP server:
var http = require('http').Server(app);

// Here, we set up the route for '/'.
app.get('/', function(request, response){
	response.send('<h1>Hello world!</h1>');
});

// Now, we make the HTTP server listen on port 3000.
http.listen(3000, function(){
	console.log('listening on port 3000');
});