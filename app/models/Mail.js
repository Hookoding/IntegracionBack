const {Schema, model} = require('mongoose');

const mailSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    }
},{
    timestamps: true
});

module.exports = model('Mail', userSchema);