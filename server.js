// Dependencies
var express = require("express");
var path = require("path");
var reservation = require("./lib/Reservation.js");

// Sets up the Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Data
var reservations = [];
var waitlist = [];

// POST requests
if (reservations.length <= 4) {
    app.post("/api/reservations", function (req, res) {

        var reservation = req.body;
        reservations.push(reservation);
        res.json(reservation);

    });

} else {
    app.post("/api/waitlist", function (req, res) {

        var reservation = req.body;
        waitlist.push(reservation);
        res.json(reservation);

    });

}

// API Routes
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

// Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Starts the server to begin listening
app.listen(PORT, function () {

    console.log("App listening on PORT " + PORT);

});