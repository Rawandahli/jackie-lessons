var express = require('express');
var app = express();
var port = 3000;

var animals = require('./modules/animals');

app.get('/animals/:animal', function(request, response){
    var animal = request.params.animal;
    var sound = animals[animal];
    // var sound = animals.cats
    response.send(`${animal} say ${sound}`);
})

app.get('/', function(request, response){
    response.send('hello world!');
})

app.get('/cats/:identification', function(request, response){
    console.log(request.params);
    response.send(`meow ${request.params.identification} cat here!`);
})

// Make a new route at /greet that takes a parameter of someone's 
// name and says hello to them

app.get('/greet/:name', function(request, response){
    response.send(`Hello ${request.params.name}!!!`);
})


// app.get('/cats/1', function(request, response){
//     response.send('meow second cat here!')
// })

app.get('/honey_badger', function(request, response){
    response.send('*snort-growl-anger-monster-sound*')
})

app.listen(port, function(){
    console.log(`App is listening on port ${port}`)
})

// console.log(app);