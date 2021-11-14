//API ENDPOINT
//IMPORT
const express = require('express');
const router = express.Router();
const controller = require('../controllers/room.controller');

//EXPORT
module.exports = function(){
    router.post('/create', controller.createRoom);
    router.get('/', controller.getRoom);
    router.get('/:id', controller.getCategoriesForRoom);
    return router;
}

