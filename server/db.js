import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/dowki")
        console.log(">>> Connected to the DB")
    } catch (error) {
        console.log("Error connecting to the DB", error)
    }
}