import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect(`${process.env.URL}`).then(()=>console.log("DB connected"));
}