import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://Saurabh:Saurabh1213@cluster0.jtsn0.mongodb.net/food-del').then(()=>console.log("DB connected"));
}