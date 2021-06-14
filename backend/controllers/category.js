import asyncHandler from 'express-async-handler'
import Category from '../models/Category'

const createCategory = asyncHandler(async (req, res) => {
  const {
    name
  } = req.body

  const category = new Category({
    name
  })

  res.status(201).json(await category.save())
})

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({})
  res.json(categories)
})

const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category
      .findById(req.params.id)
      .populate('products')
      .exec()

  if (category) {
    res.json(category)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (category) {
    await category.remove()
    res.json({ message: 'Category removed' })
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (category) {
    category.name = req.body.name

    const updatedCategory = await category.save()

    res.json(updatedCategory)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})


export {
  createCategory,
  getCategoryById,
  getCategories,
  deleteCategory,
  updateCategory
}
