import asyncHandler from 'express-async-handler'
import Product from '../models/Product'

const createProduct = asyncHandler(async (req, res) => {
    const {
        name,
        category_id,
        image,
        price
    } = req.body

    const product = new Product({
        name,
        category_id,
        image,
        price
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message: 'Product removed' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        product.price = req.body.price
        product.name = req.body.name

        const updatedProduct = await product.save()

        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})


export {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct
}
