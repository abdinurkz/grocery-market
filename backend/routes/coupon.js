import express from 'express'
const router = express.Router()
import {
    createCoupon,
    getCouponById,
    getCoupons,
    deleteCoupon,
    updateCoupon
} from '../controllers/coupon'
import { protect, admin } from '../middleware/authMiddleware'

router
    .route('/')
    .get(protect, getCoupons)
    .post(protect, admin, createCoupon)


router
    .route('/:id')
    .get(protect, admin, getCouponById)
    .delete(protect, admin, deleteCoupon)
    .put(protect, admin, updateCoupon)

export default router
