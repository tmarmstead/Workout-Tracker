const express = require('express');
const mongoose = require('mongoose');
const html = require('./routes/html_routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/', html);

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`app running on port: ${PORT}`);
})