import asyncHandler from 'express-async-handler'
import Store from '../models/Store'

const createStore = asyncHandler(async (req, res) => {
    const {
        name,
        image,
        lan,
        lat
    } = req.body

    const store = new Store({
        name,
        image,
        lan,
        lat
    })

    res.status(201).json(await store.save())
})

const getStores = asyncHandler(async (req, res) => {
    const stores = await Store.find({})
    res.json(stores)
})

const getStoreById = asyncHandler(async (req, res) => {
    const store = await Store.findById(req.params.id)

    if (store) {
        res.json(store)
    } else {
        res.status(404)
        throw new Error('Store not found')
    }
})

const deleteStore = asyncHandler(async (req, res) => {
    const store = await Store.findById(req.params.id)

    if (store) {
        await store.remove()
        res.json({ message: 'Store removed' })
    } else {
        res.status(404)
        throw new Error('Store not found')
    }
})

const updateStore = asyncHandler(async (req, res) => {
    const store = await Store.findById(req.params.id)

    if (store) {
        store.name = req.body.name

        const updatedStore = await store.save()

        res.json(updatedStore)
    } else {
        res.status(404)
        throw new Error('Store not found')
    }
})


export {
    createStore,
    getStores,
    getStoreById,
    deleteStore,
    updateStore
}
