//IMPORT - FROM MODEL
const Room = require('../models/room.model');

//CREATE THE FUNCTION - TO SAVE THE ROOMS IN THE DATABASE
const createRoom = async(req, res) => {
    if(req.body) {
        const room = new Room(req.body);
        //save
        room.save()
        .then(data => {
            //200/201 = SUCCESS STATUS
            res.status(200).send({data:data});
        })
         .catch(error => {
            res.status(500).send({ error: error.message});
        });
    }
}

//FUNCTION - GET THE ROOMS 
const getRoom = async (req, res) => {
    await Room.find({ amount: {$lt: 3000}})
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }

//CREATE THE FUNCTION - RETURN THE CATEGORIES WHEN THE ROOM IS GIVEN
const getCategoriesForRoom = async (req, res) => {
    if (req.params && req.params.id) {
      await Room.findById(req.params.id)
      .populate('categories', 'name description')
      .then(data => {
        res.status(200).send({ categories: data.categories });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

//EXPORT
module.exports = {
    createRoom,
    getRoom,
    getCategoriesForRoom
};
