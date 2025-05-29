// Load environment variables
require("dotenv").config();

const cors = require('cors');
const express = require('express');
const connectToDatabase = require("./src/config/database");
const cookieParser = require('cookie-parser');

const authRouter = require('./src/routers/auth');
const profileRouter = require('./src/routers/profile');
const connectionRouter = require('./src/routers/connection');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: 'http://localhost:8000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/connection', connectionRouter);

const initializeConnection = async () => {
    try {
        await connectToDatabase();
        console.log('Database connected successfully');
        app.listen(PORT, () => console.log(`Backend Server is Running on PORT: ${PORT}`));
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
}

/*
    The public directory is looked from where the server is running.
    This means if the server is running from the backend directory, it will look for the public directory in the backend directory.
    If the server is running from the root directory, it will look for the public directory in the root directory.
    If you want to serve static files from a different directory, you can specify the path accordingly.
    For example, if you want to serve static files from the public directory in the root directory, you can use:
    app.use('/', express.static('../public')); 
*/
// app.use('/', express.static('public'));
// app.use('/public', express.static('public'));

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message || 'Internal Server Error' });
});

initializeConnection();