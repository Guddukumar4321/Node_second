const express = require("express");
require("./config");

const products = require("./product");

const app = express();
app.use(express.json())

app.post("/create",  async(req, reps) => {
  let data = new products(req.body);
  let result = await data.save();
  console.log(req.body);
  reps.send(result);
});

app.listen(5000);
