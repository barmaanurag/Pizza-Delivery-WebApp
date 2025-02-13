import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://barmaanurag1509:15092003@cluster0.w4hsp.mongodb.net/ProjectPizza").then(()=>console.log("Database connected"));
}