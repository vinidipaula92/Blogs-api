const { Router } = require('express');
const loginController = require('../controllers/loginController');
const usersController = require('../controllers/usersController');

const usersRoute = Router();

usersRoute.post('/', usersController.add);
usersRoute.use(loginController.validateToken);
usersRoute.get('/', usersController.list);

module.exports = usersRoute;