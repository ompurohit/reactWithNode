// /routes/productRoutes.js
const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = (app) => {
    // app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    //     next();
    // });
    app.get(`/api/product`, async (req, res) => {
        let products = await Product.find();
        return res.status(200).send(products);
    });

    app.post(`/api/product`, async (req, res) => {
        let product = await Product.create(req.body);
        return res.status(201).send({
            error: false,
            product
        })
    })

    app.put(`/api/product/:id`, async (req, res) => {
        const { id } = req.params;

        let product = await Product.findByIdAndUpdate(id, req.body);

        return res.status(202).send({
            error: false,
            product
        })

    });

    app.delete(`/api/product/:id`, async (req, res) => {
        const { id } = req.params;

        let product = await Product.findByIdAndDelete(id);

        return res.status(202).send({
            error: false,
            product
        })

    })

}