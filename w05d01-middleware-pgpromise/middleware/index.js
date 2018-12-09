var express = require('express');
var app = express();
var port = 3000;

var setStartTime = function(req, res, next){
  // res.locals is an object {} that we can store
  // data on and use in all of our middleware
  res.locals.startTime = Date.now();
  next();
}

var logSomething = function(req, res, next){
  if (req.path !== '/favicon.ico'){
    var timeTaken = res.locals.endTime - res.locals.startTime + ' ms'
    console.log(req.method, req.path, timeTaken);
  }
}

var renderSomething = function (req, res, next) {
  res.send('we did it!');
  next();
}

var setEndTime = function(req, res, next){
  res.locals.endTime = Date.now();
  next();
}

app.get('/hi', function(req, res){
  res.send('this is hi')
});

app.get('*', setStartTime, renderSomething, setEndTime, logSomething);


app.listen(port, function(){
  console.log(`App is listening on port ${port}`)
})