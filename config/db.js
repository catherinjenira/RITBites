import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://RITBites:87654321@cluster0.frudy65.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}