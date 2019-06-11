const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const http = require('http').Server(app);
// const https = require('https').Server({
//   "key": fs.readFileSync('/etc/letsencrypt/live/leaseplanner.ga/privkey.pem'),
//   "cert": fs.readFileSync('/etc/letsencrypt/live/leaseplanner.ga/fullchain.pem'),
// },app);
const io = require('socket.io')(http);
const ioreq = require("socket.io-request");
const brain = require('brain.js')

// Get userdata
let users = [
  "frankdewit",
]

let data = []

let routesForClient = [
  {
    title: "School",
    from: "Kruisplein 1",
    to: "Wijnhaven 61",
    departure: "15:00",
    // Weather: 0=sunny, 1=windy, 2=rain
    // Order: 0=foot, 1=car, 2=step, 3=bike, 4=scooter
    context: { weather: 0, temp: 21 },
    options:
      [
        { input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "15:00", eta: "15:23", locations: ["Kruisplein 1", [{ location: "Rochussenstraat 8 Rotterdam" }], "Wijnhaven 61"] },
        { input: { foot: 3, car: 10, step: 0, bike: 5, scooter: 0 }, order: [0, 3, 1], departure: "15:00", eta: "15:18", locations: ["Kruisplein 1", [{ location: "Aert van Nesstraat 25A," }, { location: "Coolsingel 124" }], "Wijnhaven 61"] },
        { input: { foot: 15, car: 0, step: 0, bike: 0, scooter: 10 }, order: [0, 4], departure: "15:00", eta: "15:25", locations: ["Kruisplein 1", [{ location: "Kruiskade 1" }], "Wijnhaven 61"] },
        { input: { foot: 5, car: 0, step: 0, bike: 25, scooter: 10 }, order: [0, 3, 4], departure: "15:00", eta: "15:40", locations: ["Kruisplein 1", [{ location: "Haagseveer 7" }, { location: "Hoogstraat 196" }], "Wijnhaven 61"] },
        { input: { foot: 5, car: 0, step: 0, bike: 0, scooter: 20 }, order: [0, 4], departure: "15:00", eta: "15:25", locations: ["Kruisplein 1", [{ location: "Coolsingel 40" }], "Wijnhaven 61"] },
      ]
  },
  {
    title: "School",
    from: "Kruisplein 1",
    to: "Wijnhaven 61",
    departure: "8:30",
    // Weather: 0=sunny, 1=windy, 2=rain
    // Order: 0=foot, 1=car, 2=step, 3=bike, 4=scooter
    context: { weather: 1, temp: 14 },
    options:
      [
        { input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "8:30", eta: "8:53", locations: ["Kruisplein 1", [{ location: "Rochussenstraat 8 Rotterdam" }], "Wijnhaven 61"] },
        { input: { foot: 3, car: 10, step: 0, bike: 5, scooter: 0 }, order: [0, 3, 1], departure: "8:30", eta: "8:48", locations: ["Kruisplein 1", [{ location: "Aert van Nesstraat 25A," }, { location: "Coolsingel 124" }], "Wijnhaven 61"] },
        { input: { foot: 15, car: 0, step: 0, bike: 0, scooter: 10 }, order: [0, 4], departure: "8:30", eta: "8:55", locations: ["Kruisplein 1", [{ location: "Kruiskade 1" }], "Wijnhaven 61"] },
        { input: { foot: 5, car: 0, step: 0, bike: 25, scooter: 10 }, order: [0, 3, 4], departure: "8:30", eta: "9:10", locations: ["Kruisplein 1", [{ location: "Haagseveer 7" }, { location: "Hoogstraat 196" }], "Wijnhaven 61"] },
        { input: { foot: 5, car: 0, step: 0, bike: 0, scooter: 20 }, order: [0, 4], departure: "8:30", eta: "8:55", locations: ["Kruisplein 1", [{ location: "Coolsingel 40" }], "Wijnhaven 61"] },
      ]
  },
  {
    title: "School",
    from: "Kruisplein 1",
    to: "Wijnhaven 61",
    departure: "9:00",
    // Weather: 0=sunny, 1=windy, 3=rain
    // Order: 0=foot, 1=car, 2=step, 3=bike, 4=scooter
    context: { weather: 2, temp: 9 },
    options:
      [
        { input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "9:00", eta: "9:23", locations: ["Kruisplein 1", [{ location: "Rochussenstraat 8 Rotterdam" }], "Wijnhaven 61"] },
        { input: { foot: 3, car: 10, step: 0, bike: 5, scooter: 0 }, order: [0, 3, 1], departure: "9:00", eta: "9:18", locations: ["Kruisplein 1", [{ location: "Aert van Nesstraat 25A," }, { location: "Coolsingel 124" }], "Wijnhaven 61"] },
        { input: { foot: 15, car: 0, step: 0, bike: 0, scooter: 10 }, order: [0, 4], departure: "9:00", eta: "9:25", locations: ["Kruisplein 1", [{ location: "Kruiskade 1" }], "Wijnhaven 61"] },
        { input: { foot: 5, car: 0, step: 0, bike: 25, scooter: 10 }, order: [0, 3, 4], departure: "9:00", eta: "9:40", locations: ["Kruisplein 1", [{ location: "Haagseveer 7" }, { location: "Hoogstraat 196" }], "Wijnhaven 61"] },
        { input: { foot: 5, car: 0, step: 0, bike: 0, scooter: 20 }, order: [0, 4], departure: "9:00", eta: "9:25", locations: ["Kruisplein 1", [{ location: "Coolsingel 40" }], "Wijnhaven 61"] },
      ]
  },
  {
    title: "Huis - Kantoor",
    from: "Europalaan 3",
    to: "Parklaan 14",
    departure: "9:50",
    // Weather: 0=sunny, 1=windy, 2=rain
    // Order: 0=foot, 1=car, 2=step, 3=bike, 4=scooter
    context: { weather: 0, temp: 20 },
    options:
      [
        { input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "9:50", eta: "10:13", locations: ["Europalaan 3", [{ location: "Rochussenstraat 8 Rotterdam" }], "Parklaan 14"] },
        { input: { foot: 3, car: 10, step: 0, bike: 5, scooter: 0 }, order: [0, 3, 1], departure: "9:50", eta: "10:08", locations: ["Europalaan 3", [{ location: "Aert van Nesstraat 25A" }, { location: "Coolsingel 124" }], "Parklaan 14"] },
        { input: { foot: 15, car: 0, step: 0, bike: 0, scooter: 10 }, order: [0, 4], departure: "9:50", eta: "10:15", locations: ["Europalaan 3", [{ location: "Kruiskade 1" }], "Parklaan 14"] },
        { input: { foot: 5, car: 0, step: 0, bike: 25, scooter: 10 }, order: [0, 3, 4], departure: "9:50", eta: "10:30", locations: ["Europalaan 3", [{ location: "Haagseveer 7" }, { location: "Hoogstraat 196" }], "Parklaan 14"] },
        { input: { foot: 5, car: 0, step: 0, bike: 0, scooter: 20 }, order: [0, 4], departure: "9:50", eta: "10:15", locations: ["Europalaan 3", [{ location: "Coolsingel 40" }], "Parklaan 14"] },
      ]
  },
  {
    title: "Kantoor - Huis",
    from: "Parklaan 14",
    to: "Europalaan 3",
    departure: "18:00",
    // Weather: 0=sunny, 1=windy, 2=rain
    // Order: 0=foot, 1=car, 2=step, 3=bike, 4=scooter
    context: { weather: 1, temp: 16 },
    options:
      [
        { input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "18:00", eta: "18:23", locations: ["Parklaan 14", [{ location: "Rochussenstraat 8 Rotterdam" }], "Europalaan 3"] },
        { input: { foot: 3, car: 10, step: 0, bike: 5, scooter: 0 }, order: [0, 3, 1], departure: "18:00", eta: "18:18", locations: ["Parklaan 14", [{ location: "Coolsingel 124" }, { location: "Aert van Nesstraat 25A" }], "Europalaan 3"] },
        { input: { foot: 15, car: 0, step: 0, bike: 0, scooter: 10 }, order: [0, 4], departure: "18:00", eta: "18:25", locations: ["Parklaan 14", [{ location: "Kruiskade 1" }], "Europalaan 3"] },
        { input: { foot: 5, car: 0, step: 0, bike: 25, scooter: 10 }, order: [0, 3, 4], departure: "18:00", eta: "18:40", locations: ["Parklaan 14", [{ location: "Hoogstraat 196" }, { location: "Haagseveer 7" }], "Europalaan 3"] },
        { input: { foot: 5, car: 0, step: 0, bike: 0, scooter: 20 }, order: [0, 4], departure: "18:00", eta: "18:25", locations: ["Parklaan 14", [{ location: "Coolsingel 40" }], "Europalaan 3"] },
      ]
  },
]

// Loads in the userdata, creates and trains brain js network for every user
startup()

app.get('/', function (req, res) {
  res.send('Backend ai server is running');
});

io.on('connection', function (socket) {
  console.log('an user connected')

  socket.on('disconnect', function () {
    console.log('user disconnected')
  })

  // Check is req.username exist and give back the corresponding data
  ioreq(socket).response("GETUSER", function (req, res) { // method, handler
    let file = ""
    for (let i = 0; i < users.length; i++) {
      const u = users[i]
      const d = data[i]
      if (d.username == req.user) {
        file = 'data/' + u + '.json'
        fs.readFile(file, (err, data) => {
          if (err) throw err
          let userData = JSON.parse(data)
          res(userData)
          return
        })
      }

    }
  })

  // Update userfile
  socket.on('SAVE', function (input) {
    let file = ""
    for (let i = 0; i < users.length; i++) {
      const u = users[i]
      const d = data[i]
      if (d.username == input.user) {
        file = 'data/' + u + '.json'
        let json = JSON.stringify(input.data)
        fs.writeFile(file, json, 'utf8', function (err) {
          if (err) throw err
        })
      } else {
        console.log("User doesn't exist")
      }
    }
  })

  ioreq(socket).response("BRAIN", function (req, res) {
    for (let i = 0; i < users.length; i++) {
      const d = data[i]
      if (d.username == req.user) {
        if (d.data.length > 0) {
          let routes = getResult(routesForClient[req.route], d)
          //console.log(routes)
          res(routes)
          return
        } else {
          res(routesForClient[req.route])
          return
        }
      }
    }
  })

  socket.on("TRAIN", function (_data) {
    for (let i = 0; i < users.length; i++) {
      const d = data[i]
      if (d.username == _data.user) {
        let goodOption = _data.trainingData[_data.index]
        _data.trainingData.splice(_data.index, 1)
        let badOptions = _data.trainingData

        for (let i = 0; i < badOptions; i++) {
          const e = badOptions[i];
          d.data.push({ input: e.input, output: [0] })
        }
        d.data.push({ input: goodOption.input, output: [1] })
        let network = d.network
        network.train(d.data)
        console.log("AI updated")
        return
      }
    }
  })

  socket.on("RESET", function (_data) {
    for (let i = 0; i < users.length; i++) {
      const d = data[i]
      if (d.username == _data.user) {
        d.data = []
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
    data.push(JSON.parse(fs.readFileSync('data/' + e + '.json', 'utf8')))
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
    if (data[i].data.length > 0) e.train(data[i].data)
  }
  //console.log(users, data)
}

// Returns the best routes in descending order
function getResult(routes, user) {
  // Find the best result
  let route = routes
  let results = []
  let context = routes.context

  for (let i = 0; i < routes.options.length; i++) {
    const r = routes.options[i]
    const e = routes.options[i].input
    let network = user.network
    e.weather = context.weather
    e.temp = context.temp

    let result = network.run(e)
    r.output = [result]
    results.push(r)
  }
  results.sort(function (a, b) { return b.output[0] - a.output[0] });
  route.options = results

  return route
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