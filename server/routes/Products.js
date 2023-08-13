const express = require('express')
const router = express.Router()

const { Products } = require('../models')

router.get('/', async (req,res) => {
    const allProducts = await Products.findAll()
    res.json(allProducts)
})

router.get('/:id', async (req,res) => {
    const id = req.params.id
    const product = await Products.findByPk(id)
    res.send(product)
})

router.post('/add', async (req,res) => {
    //add product
    //say, we have a form at the frontend to add products and we recieve data for our product table in the form of a json object

    const product = req.body
    const newProduct = await Products.create(product)
    res.json(newProduct)
})

router.put('/:id', (req,res) => {
    //update product
})

router.delete('/:id', (req,res) => {
    //delete product
})

module.exports = router