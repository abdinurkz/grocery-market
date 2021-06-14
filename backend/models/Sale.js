import mongoose from 'mongoose'

const saleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    store_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Store',
    }
}, {
    timestamp: true
})

const Sale = mongoose.model('Sale', saleSchema)

export default Sale
