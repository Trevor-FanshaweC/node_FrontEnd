const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", require('./routes/index'));

app.listen(3001);