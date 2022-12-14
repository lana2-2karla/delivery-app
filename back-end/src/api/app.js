const express = require('express');
const cors = require('cors');
const authRouter = require('../routes/authRouter');
const errorHandler = require('../middlewares/errorHandler');
const registerRouter = require('../routes/usersRouter');
const customersRouter = require('../routes/customersRouter');
const sellerRouter = require('../routes/sellersRouter');
// const userRouter = require('../routes/usersRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/images', express.static('public'));
app.use(authRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(registerRouter);
app.use(customersRouter);
// app.use(userRouter);
app.use(sellerRouter);
app.use(errorHandler);

module.exports = app;
