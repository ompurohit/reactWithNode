// /models/user collection

const mongoose = require('mongoose');
const { Schema } = mongoose;

const profilesSchema = new Schema({
    userId: Schema.Types.ObjectId,
    name: String,
    isLoggedIn: Boolean,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

mongoose.model('profiles', profilesSchema);