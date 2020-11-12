const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Register = new Schema({
    firstname: {type:String},
    lastname: {type:String},
    email: {type:String},
    password: {type:String}
})

Register = mongoose.model('Register', Register);

module.exports = {
    Register:Register
};