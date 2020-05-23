// /models/user collection

const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    usesrname: String,
    password: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

mongoose.model('users', usersSchema);