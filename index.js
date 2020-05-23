const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// IMPORT MODELS
require('./models/Products');
require('./models/Categories');
require('./models/Users');
require('./models/Profiles');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/nmo`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

//IMPORT ROUTES
require('./routes/productsRoute')(app);
require('./routes/usersRoute')(app);
require('./routes/categoriesRoute')(app);
require('./routes/profilesRoute')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('nmo/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'nmo', 'build', 'index.html'))
    })

}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})