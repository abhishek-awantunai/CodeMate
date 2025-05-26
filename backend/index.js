// const URI = "mongodb+srv://byheart2526:<db_password>@namastenode.aeuuy20.mongodb.net/"
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});