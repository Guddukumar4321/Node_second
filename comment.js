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