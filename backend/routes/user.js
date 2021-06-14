import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  getUserCart
} from '../controllers/user'
import { protect, admin } from '../middleware/authMiddleware'

router
  .route('/register')
  .post(registerUser)

router
    .route('/')
    .get(protect, getUserCart)

router
  .route('/all')
  .get(protect, admin, getUsers)

router
  .route('/login')
  .post(authUser)

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router
