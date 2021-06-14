import asyncHandler from 'express-async-handler'
import Sale from '../models/Sale'

const createSale = asyncHandler(async (req, res) => {
    const {
        name,
        discount,
        store_id
    } = req.body

    const sale = new Sale({
        name,
        discount,
        store_id
    })

    res.status(201).json(await sale.save())
})

const getSales = asyncHandler(async (req, res) => {
    const sales = await Sale.find({})
    res.json(sales)
})

const getSaleById = asyncHandler(async (req, res) => {
    const sale = await Sale.findById(req.params.id)

    if (sale) {
        res.json(sale)
    } else {
        res.status(404)
        throw new Error('Sale not found')
    }
})

const deleteSale = asyncHandler(async (req, res) => {
    const sale = await Sale.findById(req.params.id)

    if (sale) {
        await sale.remove()
        res.json({ message: 'Sale removed' })
    } else {
        res.status(404)
        throw new Error('Sale not found')
    }
})

const updateSale = asyncHandler(async (req, res) => {
    const sale = await Sale.findById(req.params.id)

    if (sale) {
        sale.name = req.body.name

        const updatedSale = await sale.save()

        res.json(updatedSale)
    } else {
        res.status(404)
        throw new Error('Sale not found')
    }
})


export {
    createSale,
    getSales,
    getSaleById,
    deleteSale,
    updateSale
}
