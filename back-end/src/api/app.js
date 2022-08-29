const express = require('express');
const authRouter = require('../routes/authRouter');
const errorHandler = require('../middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use(authRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorHandler);

module.exports = app;
