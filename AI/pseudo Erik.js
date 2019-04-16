data [
    let temp = 12
    let traveltime = 29
    let km = 30
    let wind = 100
    let neerslag = 4
    let congestion = 4
]

let label = 1 // route


// onder deze omstandigheden kiest de user voor route 1
network.train(data, label)




// testen met nieuwe data
data [
    let temp = 20
    let traveltime = 29
    let km = 30
    let wind = 100
    let neerslag = 4
    let congestion = 4
]


let route = network.test(data)

// 1