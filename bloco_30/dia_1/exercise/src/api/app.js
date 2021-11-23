const express = require('express');
const plantsRoutes = require('../routes/plantsRoutes');
const middlewareError = require('../middlewares/plantsError');

const app = express();
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(plantsRoutes);
app.use(middlewareError);

module.exports = app;
