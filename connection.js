const mongoose = require('mongoose')
const URI = 'mongodb://127.0.0.1:27017/obaa'

const connectDB = async () => 
{
    await mongoose.connect(URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('db connection established');
}

module.exports = connectDB;