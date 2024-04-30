import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true        
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema);