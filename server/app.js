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
    title: "setup1",
    from: "Kruisplein 1",
    to: "Wijnhaven 61",
    departure: "15:00",
    // Weather: 0=sunny, 1=windy, 2=rain
    // Order: 0=foot, 1=car, 2=step, 3=bike, 4=scooter
    context: { weather: 0, temp: 21 },
    options:
      [
        { input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "15:00", eta: "15:23", locations: ["Kruisplein 1", [{ location: "Rochussenstraat 8 Rotterdam" }], "Wijnhaven 61"] },
        { input: { foot: 3, car: 0, step: 0, bike: 10, scooter: 15 }, order: [0, 3, 4], departure: "15:00", eta: "15:28", locations: ["Kruisplein 1", [{ location: "Aert van Nesstraat 25A," }, { location: "Coolsingel 124" }], "Wijnhaven 61"] },
        { input: { foot: 10, car: 15, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "15:00", eta: "15:25", locations: ["Kruisplein 1", [{ location: "Kruiskade 1" }], "Wijnhaven 61"] },
        { input: { foot: 2, car: 5, step: 20, bike: 0, scooter: 0 }, order: [0, 1, 2], departure: "15:00", eta: "15:27", locations: ["Kruisplein 1", [{ location: "Haagseveer 7" }, { location: "Hoogstraat 196" }], "Wijnhaven 61"] },
        { input: { foot: 5, car: 0, step: 0, bike: 0, scooter: 25 }, order: [0, 4], departure: "15:00", eta: "15:30", locations: ["Kruisplein 1", [{ location: "Coolsingel 40" }], "Wijnhaven 61"] },
      ]
  },
  {
    title: "setup2",
    from: "Kruisplein 1",
    to: "Wijnhaven 61",
    departure: "8:30",
    // Weather: 0=sunny, 1=windy, 2=rain
    // Order: 0=foot, 1=car, 2=step, 3=bike, 4=scooter
    context: { weather: 1, temp: 14 },
    options:
      [
        { input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "8:30", eta: "8:53", locations: ["Kruisplein 1", [{ location: "Rochussenstraat 8 Rotterdam" }], "Wijnhaven 61"] },
        { input: { foot: 3, car: 0, step: 0, bike: 10, scooter: 15 }, order: [0, 3, 4], departure: "8:30", eta: "8:58", locations: ["Kruisplein 1", [{ location: "Aert van Nesstraat 25A," }, { location: "Coolsingel 124" }], "Wijnhaven 61"] },
        { input: { foot: 10, car: 15, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "8:30", eta: "8:55", locations: ["Kruisplein 1", [{ location: "Kruiskade 1" }], "Wijnhaven 61"] },
        { input: { foot: 2, car: 5, step: 20, bike: 0, scooter: 0 }, order: [0, 1, 2], departure: "8:30", eta: "8:57", locations: ["Kruisplein 1", [{ location: "Haagseveer 7" }, { location: "Hoogstraat 196" }], "Wijnhaven 61"] },
        { input: { foot: 5, car: 0, step: 0, bike: 0, scooter: 25 }, order: [0, 4], departure: "8:30", eta: "9:00", locations: ["Kruisplein 1", [{ location: "Coolsingel 40" }], "Wijnhaven 61"] },
      ]
  },
  {
    title: "setup3",
    from: "Kruisplein 1",
    to: "Wijnhaven 61",
    departure: "9:00",
    // Weather: 0=sunny, 1=windy, 3=rain
    // Order: 0=foot, 1=car, 2=step, 3=bike, 4=scooter
    context: { weather: 2, temp: 9 },
    options:
      [
        { input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "9:00", eta: "9:23", locations: ["Kruisplein 1", [{ location: "Rochussenstraat 8 Rotterdam" }], "Wijnhaven 61"] },
        { input: { foot: 3, car: 0, step: 0, bike: 10, scooter: 15 }, order: [0, 3, 4], departure: "9:00", eta: "9:28", locations: ["Kruisplein 1", [{ location: "Aert van Nesstraat 25A," }, { location: "Coolsingel 124" }], "Wijnhaven 61"] },
        { input: { foot: 10, car: 15, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "9:00", eta: "9:25", locations: ["Kruisplein 1", [{ location: "Kruiskade 1" }], "Wijnhaven 61"] },
        { input: { foot: 2, car: 5, step: 20, bike: 0, scooter: 0 }, order: [0, 1, 2], departure: "9:00", eta: "9:27", locations: ["Kruisplein 1", [{ location: "Haagseveer 7" }, { location: "Hoogstraat 196" }], "Wijnhaven 61"] },
        { input: { foot: 5, car: 0, step: 0, bike: 0, scooter: 25 }, order: [0, 4], departure: "9:00", eta: "9:30", locations: ["Kruisplein 1", [{ location: "Coolsingel 40" }], "Wijnhaven 61"] },
      ]
  },
  {
    title: "Huis - Kantoor",
    from: "Europalaan 3",
    to: "Parklaan 14",
    departure: "9:30",
    // Weather: 0=sunny, 1=windy, 2=rain
    // Order: 0=foot, 1=car, 2=step, 3=bike, 4=scooter
    context: { weather: 0, temp: 20 },
    options:
      [
        { input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "9:30", eta: "9:53", locations: ["Europalaan 3", [{ location: "Rochussenstraat 8 Rotterdam" }], "Parklaan 14"] },
        { input: { foot: 3, car: 0, step: 0, bike: 10, scooter: 15 }, order: [0, 3, 4], departure: "9:30", eta: "9:58", locations: ["Europalaan 3", [{ location: "Aert van Nesstraat 25A" }, { location: "Coolsingel 124" }], "Parklaan 14"] },
        { input: { foot: 10, car: 15, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "9:30", eta: "9:55", locations: ["Europalaan 3", [{ location: "Kruiskade 1" }], "Parklaan 14"] },
        { input: { foot: 2, car: 5, step: 20, bike: 0, scooter: 0 }, order: [0, 1, 2], departure: "9:30", eta: "9:57", locations: ["Europalaan 3", [{ location: "Haagseveer 7" }, { location: "Hoogstraat 196" }], "Parklaan 14"] },
        { input: { foot: 5, car: 0, step: 0, bike: 0, scooter: 25 }, order: [0, 4], departure: "9:30", eta: "10:00", locations: ["Europalaan 3", [{ location: "Coolsingel 40" }], "Parklaan 14"] },
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
        { input: { foot: 3, car: 0, step: 0, bike: 10, scooter: 15 }, order: [0, 3, 4], departure: "18:00", eta: "18:28", locations: ["Parklaan 14", [{ location: "Coolsingel 124" }, { location: "Aert van Nesstraat 25A" }], "Europalaan 3"] },
        { input: { foot: 10, car: 15, step: 0, bike: 0, scooter: 0 }, order: [0, 1], departure: "18:00", eta: "18:25", locations: ["Parklaan 14", [{ location: "Kruiskade 1" }], "Europalaan 3"] },
        { input: { foot: 2, car: 5, step: 20, bike: 0, scooter: 0 }, order: [0, 1, 2], departure: "18:00", eta: "18:27", locations: ["Parklaan 14", [{ location: "Hoogstraat 196" }, { location: "Haagseveer 7" }], "Europalaan 3"] },
        { input: { foot: 5, car: 0, step: 0, bike: 0, scooter: 25 }, order: [0, 4], departure: "18:00", eta: "18:30", locations: ["Parklaan 14", [{ location: "Coolsingel 40" }], "Europalaan 3"] },
      ]
  },
]

// Loads in the userdata, creates and trains brain js network for every user
startup()

app.get('/', function (req, res) {
  res.send('Backend ai server is running');
});

io.on('connection', function (socket) {
  //console.log('an user connected')

  socket.on('disconnect', function () {
    //console.log('user disconnected')
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
        let options = _data.route.options
        // for (let index = 0; index < options.length; index++) {
        //   const element = options[index];
        //   element.input.weather = _data.route.context.weather
        //   element.input.temp = _data.route.context.temp
        // }

        let goodOption = options[_data.index]
        _data.route.options.splice(_data.index, 1)
        let badOptions = _data.route.options
        //console.log(_data.trainingData, goodOption)
        for (let i = 0; i < badOptions.length + 1; i++) {
          let element
          if (i == badOptions.length) element = { input: goodOption.input, output: [1] };
          else element = { input: badOptions[i].input, output: [0] };
          for (let index = 0; index < 5; index++) {
            let variation = { input: {}, output: [] }

            //variation.input.weather = element.input.weather
            //variation.input.temp = getRandomInt(element.input.temp - 2, element.input.temp + 2)
            variation.input.foot = getRandomInt(element.input.foot - 2, element.input.foot + 2)
            variation.input.car = getRandomInt(element.input.car - 2, element.input.car + 2)
            variation.input.step = getRandomInt(element.input.step - 2, element.input.step + 2)
            variation.input.bike = getRandomInt(element.input.bike - 2, element.input.bike + 2)
            variation.input.scooter = getRandomInt(element.input.scooter - 2, element.input.scooter + 2)
            variation.output = element.output

            d.data.push(variation)
          }
          d.data.push(element)
        }
        let network = d.network
        network.train(d.data)
        console.log("AI has been updated")

        // let filename = "data/" + data + ".json"
        // let content = JSON.stringify(d.data);

        // console.log("-------AI Dummy data generator-------");

        // fs.appendFile(filename, content, function (err) {
        //   if (err) throw err;

        //   console.log("Data generated, file saved to: " + filename);
        // });
        return
      }
    }
  })

  socket.on("RESET", function (_data) {
    for (let i = 0; i < users.length; i++) {
      const d = data[i]
      if (d.username == _data.user) {
        d.data = []
        //console.log(d.data)
        console.log("Data reset complete")
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
    console.log(i+1,result)
    results.push(r)
  }
  results.sort(function (a, b) { return b.output[0] - a.output[0] });
  route.options = results

  return route
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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