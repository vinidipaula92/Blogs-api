const express = require('express');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
require('express-async-errors');
const loginRoute = require('./routes/loginRoute');
const usersRoute = require('./routes/usersRoute');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', usersRoute);

app.use(errorHandlerMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
