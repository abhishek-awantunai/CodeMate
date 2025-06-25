// IP whitelisting is must to make DB to be connected to the server also the credentials should be correct.
// This file is responsible for connecting to the MongoDB database using Mongoose.
// It uses the connection string stored in the environment variable MONGO_CONNECTION_STRING.


const mongoose = require('mongoose');
const URL = process.env.MONGO_CONNECTION_STRING;

const connectToDatabase = async () => {
    return await mongoose.connect(URL)
};

module.exports = connectToDatabase;