const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

console.log("!!!dotenv log!!!: ", process.env.MONGODB_URI)

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || process.env.CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const db = mongoose.connection
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.listen(PORT, () => {
    console.log(`Router running on port: ${PORT}`);
})