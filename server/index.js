const express = require('express');
const dotenv = require('dotenv');
const db = require('./db/index');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(() => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})