import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
    },
}, {
    timestamp: true
})

const Product = mongoose.model('Product', productSchema)

export default Product
