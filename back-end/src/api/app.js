const express = require('express');
const errorHandler = require('../middlewares/errorHandler');
const registerRouter = require('../routes/usersRouter');
const authRouter = require('../routes/authRouter');

const app = express();
app.use(express.json());

app.use(authRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(registerRouter);
app.use(errorHandler);

module.exports = app;
