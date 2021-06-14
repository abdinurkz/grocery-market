import mongoose from 'mongoose'

const wishlistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    checked: {
        type: Boolean,
        required: false,
        default: false
    }
}, {
    timestamp: true
})

const Wishlist = mongoose.model('Wishlist', wishlistSchema)

export default Wishlist
