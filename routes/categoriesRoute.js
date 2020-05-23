// /routes/productRoutes.js
const mongoose = require('mongoose');
const Categories = mongoose.model('categories');

module.exports = (app) => {

    app.get(`/api/category`, async (req, res) => {
        let category = await Categories.find();
        return res.status(200).send(category);
    });

    app.post(`/api/category`, async (req, res) => {
        let category = await Categories.create(req.body);
        return res.status(201).send({
            error: false,
            category
        })
    })

    app.put(`/api/category/:id`, async (req, res) => {
        const { id } = req.params;

        let category = await Categories.findByIdAndUpdate(id, req.body);
        return res.status(202).send({
            error: false,
            category
        })

    });

    app.delete(`/api/category/:id`, async (req, res) => {
        const { id } = req.params;

        let category = await Categories.findByIdAndDelete(id);
        return res.status(202).send({
            error: false,
            category
        })

    })

}