import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    _id: {
        type: String,
        required: true
    },
    cart: {
        type: mongoose.Schema.ObjectId,
        ref: 'Cart'
    }
}, {
    timestamps: true
})

export default mongoose.models.User || mongoose.model('User', UserSchema);