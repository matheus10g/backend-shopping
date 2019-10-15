const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv/config');

mongoose.connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const app = express();

app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3333);