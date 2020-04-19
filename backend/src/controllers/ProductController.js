const connection = require('../database/connection')

module.exports = {

    async index(request, response){
        const products = await connection('products').select('*')

        return response.json(products)

    },

    async create(request, response){
        const {name, quantity, expirationDate, category} = request.body

        const category_id = category

        const [id] = await connection('products').insert({
            name,
            quantity,
            expirationDate,
            category_id
        })

        return response.json({id})
    }
}