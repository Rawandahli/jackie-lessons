// Set up express
var express = require('express');
var app = express();
var port = 3000;

//import products
var products = require('./modules/products')

// create a route for the store's homepage
app.get('/', function(request, response){
    response.send('This is Jackie\'s store!!!');
})

//create a route that will render (aka send) 
// the correct product. Hint: you will need params!
app.get('/products/:product', function(request,response){
    var productName = request.params.product;
    var product = products[productName];
    response.send(`${productName} is a ${product.description} and costs ${product.price}`)
})

// Make your app listen
app.listen(port, function(){
    console.log(`App is listening on port ${port}`);
})