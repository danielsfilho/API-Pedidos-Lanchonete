const mongoose = require('mongoose')

const schemaClient = new mongoose.Schema({
    name: String,
    email: String,
    telephone: Number,
    address: String,
})

const schemaProduct = new mongoose.Schema({
    productName: String,
    productPrice: Number,
})

const schemaOrders = new mongoose.Schema({
    date: String,
    status: String,
})


const Model = mongoose.model('products', schemaClient, schemaProduct, schemaOrders)

module.exports = Model