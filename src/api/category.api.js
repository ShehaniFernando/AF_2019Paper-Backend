//API ENDPOINT
//IMPORT
const express = require('express');
const router = express.Router();
const controller = require('../controllers/category.controller');

//EXPORT
module.exports = function(){
    router.post('/create', controller.createCategory);
    router.get('/', controller.getAllCategories);
    router.get('/:id', controller.getRoomsForCategory);
    router.get('/amount/:id', controller.calculateCategoryAmount);
    return router;
}

