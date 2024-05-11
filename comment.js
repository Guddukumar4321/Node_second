// // // const http = require('http');
// // // const data = require('./data');

// // // http.createServer((req, resp) => {
// // //     resp.writeHead(200, {'Content-Type':'application\json'});
// // //     resp.write(JSON.stringify(data));
// // //     resp.end();
// // // }).listen(4200);


// // const fs = require('fs');
// // const path = require('path');
// // const _dirpath = path.join(__dirname, 'CRUD');
// // const filePath = _dirpath+'/apple.txt'

// // // fs.writeFileSync(filePath, "This is demo page for test");
// // // fs.readFile(filePath, 'utf8', (err, item) => {
// // //     console.log(item);
// // // });

// // fs.appendFile(filePath, "this file is update successfully apple.txt", (err) => {
// //     if (!err) console.log('file is update successfully');
// // });


// const express = require('express');
// const path = require('path');


// const app = express();
// const publicPath = path.join(__dirname, "public");

// console.log(publicPath);

// app.set('view engine', 'ejs');



// app.use(express.static(publicPath));
 
// app.get('/profile', (_, resp) => {
//     resp.render('profile');
// });

// // app.get('', (req, resp) => {
// //     console.log("check broser name", req.query.name);
// //     resp.send('Welcome, '+ req.query.name +' on home page');
// // })

// // app.get('/help', (req, resp) => {
// //     resp.send("this is help page");
// // })
// app.listen(4200);



// const dbconnection = require('./mongodb');
// const mongo = require('mongodb');




// const express = require('express');
// const { name } = require('ejs');

// const app = express();

// app.use(express.json());

// app.get('/',  async(req, resp) => {
  
//     let db = await dbconnection();
//     let data = await db.find().toArray();

     
//     resp.send(data);
// })

// app.post('/', async (req, resp) => {
    
//     let data = await dbconnection();
//     let result = await data.insertOne(req.body);
//     let response = await data.find().toArray();

//     resp.send(response);


// })

// app.put('/:name',  async(res, resp) => {
//     let db = await dbconnection();
//     let updateData = await db.updateOne({name:res.params.name}, { $set: res.body });
//     let data = await db.find().toArray();
//     resp.send(data);
// })


// app.delete('/:id', async (req, resp) => {
//     let db = await dbconnection();
//     let result = await db.deleteOne({_id: new mongo.ObjectId(req.params.id) });
//     resp.send(result);

// })

// app.listen(4200);


// const dbconnection = require('./mongodb');

// const main = async () => {

//     let data = await dbconnection();
//      data = await data.find({}).toArray();
//      console.warn(data);
// }

// main();

const { name } = require("ejs");
const mongoose = require("mongoose");

const main = async () => {
  let dbconnection = await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
  const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });

  const productModel = mongoose.model("products", productsSchema);

  const data = new productModel({
    name: "Vivo T1 5G",
    price: 16999,
    brand: "samsung",
    category: "mobile",
  });
  const result = await data.save();
  console.log(result);
};

main();





const express = require("express");
require("./config");
const multer = require("multer");

const product = require("./product");

const app = express();
app.use(express.json());

//file upload method

const upload = multer({
  storage: multer.diskStorage({
    destination: function (res, file, cd) {
      cd(null, "uploads");
    },

    filename: function (req, file, cd) {
      cd(null, file.fieldname + "_" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

//file uplode method
app.post("/upload", upload, (req, resp) => {
  resp.send("file uploded");
});

//post method
app.post("/create", async (req, reps) => {
  let data = new product(req.body);
  let result = await data.save();
  console.log(req.body);
  reps.send(result);
});

//get method
app.get("/list", async (req, resp) => {
  let data = await product.find();
  resp.send(data);
});

//delete method
app.delete("/delete/:_id", async (req, resp) => {
  let data = await product.deleteOne(req.params);

  resp.send(data);
});

//update method
app.put("/update/:_id", async (req, resp) => {
  let data = await product.updateOne(req.params, { $set: req.body });

  resp.send(data);
});

//search method
app.get("/search/:key", async (req, resp) => {
  let data = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });

  resp.send(data);
});

app.listen(5000);



///for system information
const os = require("os");
//console.log(os.arch());
//console.log(os.freemem()/(1024*1024*1024))
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());
