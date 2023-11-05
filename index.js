const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const attribute = require('./controller/attribute');
require('./config/db');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/postAttribute', attribute.PostAttribute);

app.get('/getAttribute', attribute.GetAttribute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});