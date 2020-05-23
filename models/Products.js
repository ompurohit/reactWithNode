// /models/user collection

const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
    categoryId: Schema.Types.ObjectId,
    name: String,
    status: Boolean,
    price: Number,
    quantity: Number,
    discription: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

mongoose.model('products', productsSchema);