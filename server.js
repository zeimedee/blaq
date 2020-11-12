const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const connectDB = require('./connection')

const routes = require('./routes');
const app = express()


app.use(express.json())
app.use(cors());

connectDB();
app.use('/obaa', routes)
app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
})