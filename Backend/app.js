const express = require("express");

const app = express();
require("dotenv").config();
require("./connection/connection");
const user = require("./routes/user");
const Books = require("./routes/book")
app.use(express.json());
//routes
app.use("/api/v1",user);
app.use("/api/v1",Books);
//creating port
// const port = process.env.PORT || 3000;  // Make sure there is no trailing comma

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});