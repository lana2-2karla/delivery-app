const express = require('express');
const cors = require('cors');
const authRouter = require('../routes/authRouter');
const errorHandler = require('../middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorHandler);

module.exports = app;
