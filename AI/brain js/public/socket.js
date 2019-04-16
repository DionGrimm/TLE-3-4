let socket = io();

socket.on("connect", function() {
    console.log("Connected")

    socket.emit("hello", "index.html")

    socket.on('brain', function(data) {
        console.log("The suggested route for you is route " + data)
    })
})