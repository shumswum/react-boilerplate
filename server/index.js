const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.static('public'));
// app.use(express.static('src'));
app.use(morgan('dev'));

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}...`);
});