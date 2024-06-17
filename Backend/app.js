const express = require("express");

const app = express();
require("dotenv").config();
require("./connection/connection")
//creating port
app.listen(process.env.PORT,()=>{
    console.log(`server is start ${process.env.PORT}`);
})