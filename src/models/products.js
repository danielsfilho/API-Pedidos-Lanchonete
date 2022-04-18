const mongoose = require('mongoose')

const schemaProduct = new mongoose.Schema({
    productName: String,
    productPrice: String,
})


const Model = mongoose.model('products', schemaProduct)

module.exports = Model