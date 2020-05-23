// /routes/productRoutes.js
const mongoose = require('mongoose');
const Profile = mongoose.model('profiles');

module.exports = (app) => {

    app.get(`/api/profile`, async (req, res) => {
        let profile = await Profile.find();
        return res.status(200).send(profile);
    });

    app.post(`/api/profile`, async (req, res) => {
        let user = await Profile.create(req.body);
        return res.status(201).send({
            error: false,
            user
        })
    })

    app.put(`/api/profile/:id`, async (req, res) => {
        const { id } = req.params;

        let user = await Profile.findByIdAndUpdate(id, req.body);

        return res.status(202).send({
            error: false,
            user
        })

    });

    app.delete(`/api/profile/:id`, async (req, res) => {
        const { id } = req.params;

        let user = await Profile.findByIdAndDelete(id);

        return res.status(202).send({
            error: false,
            user
        })

    })

}