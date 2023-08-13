const express = require('express')
const router = express.Router()

const { Reviews } = require('../models')

//REVIEWS
router.get('/:productID', async (req,res) => {
    //get reviews for a particular product
    const productID = req.params.productID
    const reviews = await Reviews.findAll({ where : {
        product_id : productID
    }})
    res.json(reviews)
})

router.post('/:productID', async (req, res) => {
      const productID = req.params.productID;

      const review = req.body;
      const newReview = await Reviews.create({
        ...review,
        product_id : productID
      });
    res.json(newReview);
  });

  //delete review
  //edit review


module.exports = router