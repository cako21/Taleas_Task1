//1
const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

//bring dotenv
const dotenv = require('dotenv');

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

//2
const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json()) // To parse the incoming requests with JSON
app.use(cors());

const connectDB = require('./config/db');
// Load Configuration
dotenv.config({path: './config/config.env'})

connectDB();

// Define the Routes
app.use('/', require('./routes/index'));

//3
const port = 5000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

