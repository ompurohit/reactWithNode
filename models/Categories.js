// /models/user collection

const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriesSchema = new Schema({
    userId: Schema.Types.ObjectId,
    name: String,
    status: Boolean,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

mongoose.model('categories', categoriesSchema);