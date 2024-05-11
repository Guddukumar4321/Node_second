const express = require("express");
const EventEmitter = require("events");

var x = 20;
console.log(++x);
const app = express();

app.get("/", (req, resp) => {
  resp.send("api called successfully");
});

app.listen(5000);
