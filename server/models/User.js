import mongoose from "mongoose";

// create a user schema
const userSchema = new mongoose.Schema({
  _id: {
    type: String, 
    required: true
  },  // Using String for _id to allow custom IDs
    
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required:true},
  role: {
    type: String,
    enum: ['hotelOwner', 'user'],
    default: "user"},

  recentSearchCities:[{
    type:String,
    required:true
  }],

},{timestamps: true});

// create a user model

const User = mongoose.model("User", userSchema);

// export the user model
export default User;
// The user model can now be used to interact with the users collection in MongoDB



  