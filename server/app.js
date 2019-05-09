const express = require('express')
const app = express()
const port = 3000
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ioreq = require("socket.io-request");
const fs = require('fs');

// brain.js
let testRoutes = [
  {weather:0,temp:23,foot:12,car:0,step:0,bike:0,scooter:8},
  {weather:0,temp:23,foot:5,car:22,step:0,bike:0,scooter:3},
  {weather:0,temp:23,foot:6,car:0,step:0,bike:22,scooter:5}
  /* old  test routes
  {temp: 14, wind: 5, rain: 60, departure: 600, congestion: 3, transfers: 7, car: 800, bicycle: 15, foot: 15},
  {temp: 4, wind: 7, rain: 60, departure: 700, congestion: 800, transfers: 1, car: 20, bicycle: 5, foot: 20},
  {temp: 13, wind: 5, rain: 60, departure: 600, congestion: 3, transfers: 0, car: 35, bicycle: 0, foot: 3}
  */
]

// Learning data
let data = JSON.parse(fs.readFileSync('data/generated/aiData1557354306.json', 'utf8'));
console.log(data)

/* Old test data
[
    {input: {temp: 20, wind: 5, rain: 60, departure: 600, congestion: 7, transfers: 1, car: 20, bicycle: 5, foot: 3}, output: [0]},
    {input: {temp: 13, wind: 6, rain: 70, departure: 600, congestion: 4, transfers: 0, car: 38, bicycle: 0, foot: 3}, output: [1]},
    {input: {temp: 18, wind: 3, rain: 50, departure: 630, congestion: 5, transfers: 0, car: 30, bicycle: 0, foot: 3}, output: [1]},
    {input: {temp: 17, wind: 5, rain: 60, departure: 600, congestion: 7, transfers: 0, car: 0, bicycle: 25, foot: 5}, output: [0]},
    {input: {temp: 14, wind: 5, rain: 60, departure: 600, congestion: 3, transfers: 3, car: 50, bicycle: 15, foot: 15}, output: [0]},
    {input: {temp: 4, wind: 7, rain: 60, departure: 700, congestion: 8000, transfers: 1, car: 20, bicycle: 5, foot: 20}, output: [0]}
]
*/
//Route 1: Zonnig, 18 graden, maandag, druk verkeer

const brain = require('brain.js')
const network = new brain.NeuralNetwork()
console.log("created a neural net")
let stats = network.train(data.data)
console.log("finished training...")
console.log(stats)

//console.log(network)
// console.log(network.run(testRoutes[0]))
// console.log(network.run(testRoutes[1]))
// console.log(network.run(testRoutes[2]))

// Find the best result
let results = []

for (let index = 0; index < testRoutes.length; index++) {
  let result = network.run(testRoutes[index])
  results.push(result)
}

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  let max = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex+1;
}

console.log(results)
let suggestedRoute = indexOfMax(results)
//--

app.get('/', function(req, res){
  res.send('Backend ai server is running');
});

io.on('connection', function(socket) {
  console.log('an user connected')

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('hello', function(clientType) {
		console.log('Hello from', clientType)
  })
  
  io.emit('brain', suggestedRoute)

  ioreq(socket).response("GETUSER", function(req, res){ // method, handler
    let file = "";
    if(req.user == "frankdewit" || req.user == "keesdewit"){
      if(req.user == "frankdewit") file = 'data/frank.json';
      if(req.user == "keesdewit") file = 'data/kees.json';
      //Get profile from json file and pass it to the front-end
      fs.readFile(file, (err, data) => {  
        if (err) throw err;
        let user = JSON.parse(data);
        res(user);
      });
    }else{
      //If username is not found
      res(false);
    }
  });

 //Update file
  socket.on('SAVE', function(input) {
    let file = "";
    if(input.user == "frankdewit" || input.user == "keesdewit"){
      if(input.user == "frankdewit") file = 'data/frank.json';
      if(input.user == "keesdewit") file = 'data/kees.json';

      //Write updated profile back to json file
      json = JSON.stringify(input.data);
      fs.writeFile(file, json, 'utf8', function(err) {
        if (err) throw err;
      });
    }else{
      console.log("User doesn't exist")
    }
  });
})

http.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})