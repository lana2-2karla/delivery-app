const express = require('express');
const cors = require('cors');
const authRouter = require('../routes/authRouter');
const errorHandler = require('../middlewares/errorHandler');
const registerRouter = require('../routes/usersRouter');
const productRouter = require('../routes/productRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(registerRouter);
app.use(productRouter);
app.use(errorHandler);

module.exports = app;
