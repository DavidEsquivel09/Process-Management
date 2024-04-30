import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required'],
    },
    details: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { 
    timestamps: true 
})

export default mongoose.model('Offer', offerSchema)