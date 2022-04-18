const mongoose = require('mongoose')

const schemaClient = new mongoose.Schema({
    name: String,
    email: String,
    telephone: Number,
    address: String,
})


const Model = mongoose.model('clients', schemaClient)

module.exports = Model