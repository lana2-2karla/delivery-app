const express = require('express');
const cors = require('cors');
const authRouter = require('../routes/authRouter');
const customerRouter = require('../routes/customersRouter');
const errorHandler = require('../middlewares/errorHandler');
const registerRouter = require('../routes/usersRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(customerRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(registerRouter);
app.use(errorHandler);

module.exports = app;
