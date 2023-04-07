import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true, unique: true}, 
    birth: {type: Date, required: true}, 
    phone: {type: Number, required: true}, 
    studentsLevel: {type: String, required: true}, 
    subject: {type: String, required: true}, 
    location: {type: String, required: true}, 
    password: {type: String, required: true}, 
    description: {type: String, required: true}
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;