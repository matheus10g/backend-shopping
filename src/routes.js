const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/products', ProductController.index);
routes.get('/products/:_id', ProductController.show);
routes.post('/products', upload.single('photo'), ProductController.store);

routes.get('/users/:_id', UserController.show);
routes.post('/users', UserController.store);

module.exports = routes;