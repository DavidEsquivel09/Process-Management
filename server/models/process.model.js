import mongoose from "mongoose";

const processSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    startDate: {
        type: Date,
        required: [true, 'Start date is required'],
    },
    endDate: {
        type: Date,
        required: [true, 'End date is required'],
    },
    details: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pendiente', 'en progreso', 'finalizado'],
        required: [true, 'Status is required'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true,
});

export default mongoose.model('Process', processSchema);