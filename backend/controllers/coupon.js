import asyncHandler from 'express-async-handler'
import Coupon from '../models/Coupon'

const createCoupon = asyncHandler(async (req, res) => {
    const {
        name,
        discount,
        store_id,
        promo_code
    } = req.body

    const coupon = new Coupon({
        name,
        discount,
        store_id,
        promo_code
    })

    res.status(201).json(await coupon.save())
})

const getCoupons = asyncHandler(async (req, res) => {
    const coupons = await Coupon.find({})
    res.json(coupons)
})

const getCouponById = asyncHandler(async (req, res) => {
    const coupon = await Coupon.findById(req.params.id)

    if (coupon) {
        res.json(coupon)
    } else {
        res.status(404)
        throw new Error('Coupon not found')
    }
})

const deleteCoupon = asyncHandler(async (req, res) => {
    const coupon = await Coupon.findById(req.params.id)

    if (coupon) {
        await coupon.remove()
        res.json({ message: 'Coupon removed' })
    } else {
        res.status(404)
        throw new Error('Coupon not found')
    }
})

const updateCoupon = asyncHandler(async (req, res) => {
    const coupon = await Coupon.findById(req.params.id)

    if (coupon) {
        coupon.name = req.body.name

        const updatedCoupon = await coupon.save()

        res.json(updatedCoupon)
    } else {
        res.status(404)
        throw new Error('Coupon not found')
    }
})


export {
    createCoupon,
    getCoupons,
    getCouponById,
    deleteCoupon,
    updateCoupon
}
