const ClientsModel = require('../models/clients')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id} : null

    const client = await ClientsModel.find(obj)

    res.send(client)
}

async function post(req, res) {
    const {
            name,
            email,
            telephone,
            address,
    } = req.body

    const orders = new ClientsModel({
        name,
        email,
        telephone,
        address,
        productName,
        productPrice,
        date,
        status,
    })

    orders.save()

    res.send({
        message: "success"
    })
}

async function put(req, res) {
    const { id } = req.params

    const client = await ClientsModel.findOneAndUpdate({ _id: id}, req.body, { new: true})

    res.send({
        message: "success",
        client,
    })
    
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ClientsModel.deleteOne({ _id: id })

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