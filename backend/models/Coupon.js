import mongoose from 'mongoose'

const couponSchema = mongoose.Schema({
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
    },
    promo_code: {
        type: String,
        required: true
    },
}, {
    timestamp: true
})

const Coupon = mongoose.model('Coupon', couponSchema)

export default Coupon
