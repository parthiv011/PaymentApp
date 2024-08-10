const express = require('express');
const dotenv = require('dotenv');
const db = require('./db/index');
const router = require('./routes/index');
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({}));

app.use(express.json());

app.use('/api/v1', router);
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
