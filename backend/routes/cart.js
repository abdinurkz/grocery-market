import express from 'express'
const router = express.Router()
import {
    createCart,
    getCartById,
    getCarts,
    deleteCart,
    updateCart
} from '../controllers/cart'
import { protect, admin } from '../middleware/authMiddleware'

router
    .route('/')
    .get(protect, getCarts)


router
    .route('/:id')
    .post(protect, createCart)
    .get(protect, getCartById)
    .delete(protect, deleteCart)
    .put(protect, updateCart)

export default router
