import express from 'express'
const router = express.Router()
import {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct
} from '../controllers/product'
import { protect, admin } from '../middleware/authMiddleware'

router
    .route('/')
    .get(protect, getProducts)
    .post(protect, admin, createProduct)


router
    .route('/:id')
    .get(protect, admin, getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)

export default router
