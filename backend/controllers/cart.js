import asyncHandler from 'express-async-handler'
import Cart from '../models/Cart'

const createCart = asyncHandler(async (req, res) => {

    const existedCart = await Cart.findOne({ product_id: req.params.id }).exec()

    if (existedCart) {
        existedCart.quantity = existedCart.quantity + 1
        const updatedCart = await existedCart.save()
        res.json(updatedCart)
    } else {
        const cart = new Cart({
            product_id: req.params.id,
            user_id: req.user._id
        })

        res.status(201).json(await cart.save())
    }
})

const getCarts = asyncHandler(async (req, res) => {
    const carts = await Cart.find({})
    res.json(carts)
})

const getCartById = asyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.id)

    if (cart) {
        res.json(cart)
    } else {
        res.status(404)
        throw new Error('Cart not found')
    }
})

const deleteCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.id)

    if (cart) {
        await cart.remove()
        res.json({ message: 'Cart removed' })
    } else {
        res.status(404)
        throw new Error('Cart not found')
    }
})

const updateCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.id)

    if (cart) {
        cart.quantity = req.body.quantity

        const updatedCart = await cart.save()

        res.json(updatedCart)
    } else {
        res.status(404)
        throw new Error('Cart not found')
    }
})


export {
    createCart,
    getCarts,
    getCartById,
    deleteCart,
    updateCart
}
