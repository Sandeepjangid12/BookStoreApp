import mongoose from "mongoose";

//database me save krne ke liye
const userSchema = mongoose.Schema({
    fullname: {type:String,
        required:true},
    email: {
        type:String,
        required:true,
        unique:true},
    password: {type:String,
        required:true},

});
const User = mongoose.model("User", userSchema);

export default User;