const express = require("express");
const res = require("express/lib/response");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    console.log("Hello");
    res.send("Hi myself Ansh and this is my first backend task.<ul><li> Please use / with your name to get a message.</li><li> Use /avg for average calculator of 3 numbers.</li> <li> /check for check success</li><li>Type /serveHTML to view my food display menu :)</li>");
});

app.get("/check",(req, res) => {
    res.send("check success");
})

app.get("/avg", (req, res) => {
    res.sendFile(__dirname + "/avg.html");
});

app.post("/avg", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var num3 = Number(req.body.num3);
    var average = (num1+num2+num3)/3;
    res.send(average.toString());
});

app.use(express.static("public"))
app.get("/serveHtml", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/:name", (req, res) => {
    res.send("Hey " + req.params.name + ", how are you? Thanks for viewing my website");
    console.log(req.params);
});

app.listen(5555, () => {
    console.log("Server is running on port 5555");
});