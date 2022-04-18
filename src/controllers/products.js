const ProductsModel = require('../models/products')


async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id} : null

    const product = await ProductsModel.find(obj)

    res.send(product)
}

async function post(req, res) {
    const {
            productName,
            productPrice,

    } = req.body

    const orders = new ProductsModel({
        productName,
        productPrice,

    })

    orders.save()

    res.send({
        message: "success"
    })
}

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id}, req.body, { new: true})

    res.send({
        message: "success",
        product,
    })
    
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    const message = remove ? 'success' : 'error'

    res.send({
        message,
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}