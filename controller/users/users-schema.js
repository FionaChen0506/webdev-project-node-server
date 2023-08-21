import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  role: {
    type: String,
    enum: ["admin", "verified", "regular"],
    default: "regular" // Default role if not specified
  },
  email: String,
  avatar: {
    type: String,
    default: "../images/default-avatar.jpg" // Set the default avatar path
  },
  level:{
    type: Number,
    default: 0
  },
  

}, { collection: "users" });

export default usersSchema;