//IMPORT - FROM MODEL
const Category = require('../models/category.model');

//CREATE THE FUNCTION - TO SAVE THE CATEGORIES IN THE DATABASE
const createCategory = async(req, res) => {
    if(req.body) {
        const category = new Category(req.body);
        //SAVE - RETURNS A PROMISE
        //AWAIT
        await category.save()
        .then(data => {
            //200/201 = SUCCESS STATUS
            res.status(200).send({data:data});
        })
         .catch(error => {
            res.status(500).send({ error: error.message});
        });
    }
}

//CREATE THE FUNCTION - TO GET ALL THE CATEGORIES
const getAllCategories = async(req,res) => {
    await Category.find({}).populate('rooms', 'code amount wing pax')
    .then(data => {
        //200/201 = SUCCESS STATUS
        res.status(200).send({data:data});
    })
     .catch(error => {
        res.status(500).send({ error: error.message});
    });
}

//CREATE THE FUNCTION - RETURN THE ROOMS WHEN THE CATEGORY IS GIVEN
const getRoomsForCategory = async(req, res) => {
    if(req.params && req.params.id) {
        await Category.findById(req.params.id)
        .populate('rooms', 'code amount wing pax')
        .then(data => {
            //200/201 = SUCCESS STATUS
            res.status(200).send({rooms:data.rooms});
        })
        .catch(error => {
            res.status(500).send({ error: error.message});
        });

    }
}

//CALCULATION
const calculateCategoryAmount = async (req, res) => {
    if (req.params && req.params.id) {
      const category = await Category.findById(req.params.id).populate('rooms', 'amount')
      let totalAmount = 0;

      console.log(category.room)

      if (category.rooms.length > 0) {
        category.rooms.map((room) => {
          totalAmount += room.amount;
          console.log(totalAmount)
        });
      }
      res.status(200).send({ totalAmount: totalAmount });
    }
  }

//EXPORT
module.exports = {
    createCategory,
    getAllCategories,
    getRoomsForCategory,
    calculateCategoryAmount
};