import asyncHandler from 'express-async-handler'
import Wishlist from '../models/Wishlist'

const createWishlist = asyncHandler(async (req, res) => {
    const {
        name,
        date,
        checked,
    } = req.body

    const wishlist = new Wishlist({
        name,
        date,
        checked
    })

    res.status(201).json(await wishlist.save())
})

const getWishlists = asyncHandler(async (req, res) => {
    const wishlists = await Wishlist.find({})
    res.json(wishlists)
})

const getWishlistById = asyncHandler(async (req, res) => {
    const wishlist = await Wishlist.findById(req.params.id)

    if (wishlist) {
        res.json(wishlist)
    } else {
        res.status(404)
        throw new Error('Wishlist not found')
    }
})

const deleteWishlist = asyncHandler(async (req, res) => {
    const wishlist = await Wishlist.findById(req.params.id)

    if (wishlist) {
        await wishlist.remove()
        res.json({ message: 'Wishlist removed' })
    } else {
        res.status(404)
        throw new Error('Wishlist not found')
    }
})

const updateWishlist = asyncHandler(async (req, res) => {
    const wishlist = await Wishlist.findById(req.params.id)

    if (wishlist) {
        wishlist.name = req.body.name

        const updatedWishlist = await wishlist.save()

        res.json(updatedWishlist)
    } else {
        res.status(404)
        throw new Error('Wishlist not found')
    }
})


export {
    createWishlist,
    getWishlists,
    getWishlistById,
    deleteWishlist,
    updateWishlist
}
