import express from 'express'
const router = express.Router()
import {
    createStore,
    getStoreById,
    getStores,
    deleteStore,
    updateStore
} from '../controllers/store'
import { protect, admin } from '../middleware/authMiddleware'

router
    .route('/')
    .get(protect, getStores)
    .post(protect, admin, createStore)


router
    .route('/:id')
    .get(protect, admin, getStoreById)
    .delete(protect, admin, deleteStore)
    .put(protect, admin, updateStore)

export default router
