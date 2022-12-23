const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require('../Routes/routes');
 

const app = express();

const port = 7000;

const url = "mongodb://localhost:27017/CandidateDB";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

mongoose.set('strictQuery', true);
mongoose.connect(url);


// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
// .then(result => {
//     app.listen(port, ()=> {
//         console.log("connected on port ",port);
//     })
//     }).catch(err=> {
//         console.log("error ",err);
//     })
app.listen(port, ()=> {
             console.log("connected on port ",port);
                 })