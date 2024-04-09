import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type : String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    },

    password: {
        type: String,
        required: true,
        min: [8, "Password must be atleast 8 character long"],
        max: [10, "Password must be 10 characters long"]
    },

});

export default mongoose.model("User", userSchema);