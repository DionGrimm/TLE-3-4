const fs = require('fs');

//let timestamp = Math.round(+new Date() / 1000);

// Datasets van persona
let persona =
{
  username: "frankdewit",
  password: "1234",
  name: "Frank de Wit",
  employer: "KPN",
  birth: "04-03-1982",
  license: true,
  routes: [
    {
      repeat: [
        {
          label: "M",
          day: "maandag",
          state: true
        },
        {
          label: "D",
          day: "dinsdag",
          state: true
        },
        {
          label: "W",
          day: "woensdag",
          state: true
        },
        {
          label: "D",
          day: "donderdag",
          state: true
        },
        {
          label: "V",
          day: "vrijdag",
          state: true
        },
        {
          label: "Z",
          day: "zaterdag",
          state: false
        },
        {
          label: "Z",
          day: "zondag",
          state: false
        }
      ],
      time1: "08:45",
      time2: "18:00",
      title: "Huis - Kantoor",
      from: "Europalaan 3",
      to: "Parklaan 14",
      route: 0
    },
    {
      repeat: [
        {
          label: "M",
          day: "maandag",
          state: true
        },
        {
          label: "D",
          day: "dinsdag",
          state: true
        },
        {
          label: "W",
          day: "woensdag",
          state: true
        },
        {
          label: "D",
          day: "donderdag",
          state: true
        },
        {
          label: "V",
          day: "vrijdag",
          state: false
        },
        {
          label: "Z",
          day: "zaterdag",
          state: false
        },
        {
          label: "Z",
          day: "zondag",
          state: false
        }
      ],
      title: "School",
      from: "Kruisplein 1",
      to: "Wijnhaven 61",
      time1: "03:33",
      time2: "23:03",
      route: 1
    },
  ],

  // niceWeather:"bike",
  // firstChoice:"scooter",
  // age:27,
  // workDays:[1,2,3,4], //1 = monday etc.
}
//Script die op basis van voorbeeld context zegt wat voor route de persoon neemt
let loopTimes = 10
// let weather = "sunny"
// let temp = 22
// let maxFoot = 20, maxCar = 15, maxStep = 0, maxBike = 30, maxScooter = 30
// let firstChoice = 4

let dummyData = [
  { input: { weather: 0, temp: 22, foot: 15, car: 0, step: 0, bike: 0, scooter: 10 }, output: [1] },
  { input: { weather: 0, temp: 22, foot: 3, car: 25, step: 0, bike: 0, scooter: 0 }, output: [0] },
  { input: { weather: 0, temp: 22, foot: 3, car: 0, step: 0, bike: 25, scooter: 8 }, output: [0.5] },

  { input: { weather: 1, temp: 12, foot: 2, car: 20, step: 0, bike: 0, scooter: 0 }, output: [0.5] },
  { input: { weather: 1, temp: 12, foot: 3, car: 10, step: 0, bike: 15, scooter: 0 }, output: [0] },
  { input: { weather: 1, temp: 12, foot: 3, car: 0, step: 0, bike: 5, scooter: 20 }, output: [1] },

  { input: { weather: 2, temp: 8, foot: 1, car: 30, step: 0, bike: 0, scooter: 0 }, output: [1] },
  { input: { weather: 2, temp: 8, foot: 3, car: 20, step: 0, bike: 0, scooter: 7 }, output: [0.5] },
  { input: { weather: 2, temp: 8, foot: 7, car: 8, step: 0, bike: 15, scooter: 0 }, output: [0] },
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let data = []

for (let index = 0; index < dummyData.length; index++) {
  const element = dummyData[index]

  for (let index = 0; index < loopTimes; index++) {
    let variation = { input: {}, output: [] }

    variation.input.weather = element.input.weather
    variation.input.temp = getRandomInt(element.input.temp - 2, element.input.temp + 2)
    variation.input.foot = getRandomInt(element.input.foot - 2, element.input.foot + 2)
    variation.input.car = getRandomInt(element.input.car - 2, element.input.car + 2)
    variation.input.step = getRandomInt(element.input.step - 2, element.input.step + 2)
    variation.input.bike = getRandomInt(element.input.bike - 2, element.input.bike + 2)
    variation.input.scooter = getRandomInt(element.input.scooter - 2, element.input.scooter + 2)
    variation.output = element.output

    data.push(variation)
  }
  data.push(element)
}

persona.data = data

let filename = "data/" + persona.username + ".json"
let content = JSON.stringify(persona);

console.log("-------AI Dummy data generator-------");

fs.appendFile(filename, content, function (err) {
  if (err) throw err;

  console.log("Data generated, file saved to: " + filename);
});

/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`)
  readline.close()
})
*/