import mongoose from 'mongoose'

const cartSchema = mongoose.Schema({
    quantity: {
        type: Number,
        required: false,
        default: 1
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
}, {
    timestamp: true
})

const Cart = mongoose.model('Cart', cartSchema)

export default Cart
