const express = require('express')
const app = express()
const port = 3000
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ioreq = require("socket.io-request");
const fs = require('fs');
const brain = require('brain.js')

// Testing with 1 user for now
// Todo:
// - Get all userfiles through a loop --- DONE
// - Save all data that the client app needs --- DONE
// - Write a function that generates a context with 1 good and 2 bad routes
// - Send those routes and data to the client app --- DOING NOW
// - Try to add congestion, tranfers, more weather options..

// Get userdata
let users = [
  "aiData1557354306",
]

let data = []

let routesForClient = [
  {
    departure: "7:00",
    // Weather: 0=sunny, 1=windy, 3=rain
    // Order: 1=foot, 2=car, 3=step, 4=bike, 5=scooter
    context:{weather: 0, temp: 20},
    routes:
    [
      {input:{foot:3,car:20,step:0,bike:0,scooter:0},order:[1,2], eta:"7:23"},
      {input:{foot:3,car:10,step:0,bike:5,scooter:0},order:[1,4,2], eta:"7:28"},
      {input:{foot:15,car:0,step:0,bike:0,scooter:10},order:[1,5], eta:"7:25"},
      {input:{foot:5,car:0,step:0,bike:25,scooter:10},order:[1,4,5], eta:"7:40"},
      {input:{foot:5,car:0,step:0,bike:0,scooter:20},order:[1,5], eta:"7:25"},
    ]
  },
]

// Loads in the userdata, creates and trains brain js network for every user
startup()

app.get('/', function(req, res){
  res.send('Backend ai server is running');
});

io.on('connection', function(socket) {
  console.log('an user connected')

  socket.on('disconnect', function() {
    console.log('user disconnected')
  })
  
  //io.emit('brain', getResult(routesForClient))

  // Check is req.username exist and give back the corresponding data
  ioreq(socket).response("GETUSER", function(req, res){ // method, handler
    let file = ""
    for (let i = 0; i < users.length; i++) {
      const u = users[i]
      const d = data[i]
      if(d.username == req.user) {
        console.log("User " + d.username + " has tried to login")
        file = 'data/generated/'+ u +'.json'
        fs.readFile(file, (err, data) => {  
          if (err) throw err
          let user = JSON.parse(data)
          res(user)
          return
        })
      }

    }
    // if(req.user == "frankdewit" || req.user == "keesdewit"){
    //   if(req.user == "frankdewit") file = 'data/frank.json'
    //   if(req.user == "keesdewit") file = 'data/kees.json'
    //   // Get profile from json file and pass it to the front-end
    //   fs.readFile(file, (err, data) => {  
    //     if (err) throw err
    //     let user = JSON.parse(data)
    //     res(user)
    //   })
    // }else{
    //   // If username is not found
    //   res(false)
    // }
  })

 // Update userfile
  socket.on('SAVE', function(input) {
    let file = ""
    for (let i = 0; i < users.length; i++) {
      const u = users[i]
      const d = data[i]
      if(d.username == input.user) {
        file = 'data/generated/'+ u +'.json'
        let json = JSON.stringify(input.data)
        fs.writeFile(file, json, 'utf8', function(err) {
          if (err) throw err
        })
      } else {
        console.log("User doesn't exist")
      }
    }
    // if(input.user == "frankdewit" || input.user == "keesdewit"){
    //   if(input.user == "frankdewit") file = 'data/frank.json'
    //   if(input.user == "keesdewit") file = 'data/kees.json'

    //   // Write updated profile back to json file
    //   let json = JSON.stringify(input.data)
    //   fs.writeFile(file, json, 'utf8', function(err) {
    //     if (err) throw err
    //   })
    // }else{
    //   console.log("User doesn't exist")
    // }
  })

  ioreq(socket).response("BRAIN", function(req, res){
    for (let i = 0; i < users.length; i++) {
      const d = data[i]
      if(d.username == req.user) {
        let routes = getResult(routesForClient[0],d)
        console.log(routes)
        res(routes)
        return
      }
    }
  })
})

http.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

// Loads in the userdata, creates and trains brain js network for every user
function startup() {
  for (let i = 0; i < users.length; i++) {
    const e = users[i]
    data.push(JSON.parse(fs.readFileSync('data/generated/'+ e +'.json', 'utf8')))
  }

  // brain.js
  // Make a network for each user
  for (let i = 0; i < data.length; i++) {
    const e = data[i]
    e.network = new brain.NeuralNetwork()
  }
  // Train every network with the correct data
  for (let i = 0; i < data.length; i++) {
    const e = data[i].network
    e.train(data[i].data)
    console.log("finished ai training user " + data[i])
  }
  //console.log(users, data)
}

// Returns the best routes in descending order
function getResult(routes, user) {
  // Find the best result
  let results = []
  let context = routes.context

  for (let i = 0; i < routes.routes.length; i++) {
    const r = routes.routes[i]
    const e = routes.routes[i].input
    let network = user.network
    e.weather = context.weather
    e.temp = context.temp
    
    let result = network.run(e)
    r.output = [result]

    results.push(r)
  }

 //results.sort(function(a,b){return b-a})

  return results
}

// Helpers
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getValue(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }