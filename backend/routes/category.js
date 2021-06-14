import express from 'express'
const router = express.Router()
import {
    createCategory,
    getCategoryById,
    getCategories,
    deleteCategory,
    updateCategory
} from '../controllers/category'
import { protect, admin } from '../middleware/authMiddleware'

router
    .route('/')
    .get(protect, getCategories)
    .post(protect, admin, createCategory)


router
    .route('/:id')
    .get(protect, admin, getCategoryById)
    .delete(protect, admin, deleteCategory)
    .put(protect, admin, updateCategory)

export default router
