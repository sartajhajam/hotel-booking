import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact:{
    type: String,
    required: true,
  },
  owner:{
    type: String,
    ref: 'User',
    required: true,
  },
  city:{
    type: String,
    required: true,
  },
},{timestamps: true});
// Create a Hotel model
const Hotel = mongoose.model("Hotel", hotelSchema);
// Export the Hotel model
export default Hotel;
// The Hotel model can now be used to interact with the hotels collection in MongoDB