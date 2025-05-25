// const URI = "mongodb+srv://byheart2526:U5TxsGd35B91DlDH@namastenode.aeuuy20.mongodb.net/codeMate"
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use()

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});