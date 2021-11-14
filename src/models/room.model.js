//IMPORT MONGOOSE PACKAGE
const mongoose = require('mongoose');

//MODEL CLASS SCHEMA
const RoomSchema = new mongoose.Schema({
    code: {type:String, required:true, trim:true},
    amount: {type:Number, required:true},   
    wing: {type:String, required:true, trim:true},
    pax: {type:Number, required:true},

    //MANY TO MANY RELATIONSHIP - GIVE REFERENCE TO CATEGORY COLLECTION
    categories: [{type: mongoose.Schema.Types.ObjectId, required:false, ref:'categories'}]
});

//SAVE TO THE DATABASE
const Room = mongoose.model('rooms', RoomSchema);

//EXPORT - IMPORTED IN THE CONTROLLER
module.exports = Room;