import mongoose from 'mongoose'

const storeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    lan: {
        type: String,
        required: false
    },
    lat: {
        type: String,
        required: false
    }
}, {
    timestamp: true
})

const Store = mongoose.model('Store', storeSchema)

export default Store
