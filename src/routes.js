const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const ProductController = require('./controllers/ProductController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', upload.single('photo'), ProductController.store);

module.exports = routes;