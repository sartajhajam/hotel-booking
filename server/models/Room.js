import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  hotel:{
    type: String,
    ref: 'Hotel', // Reference to the Hotel model
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,

  },
  amenities:{
    type: Array,
    required: true,
  },
  images:[{
    type: String,
}],

  isAvailable:{
    type: Boolean,
    default: true, // Default value is true
    
  },
},{timestamps: true});
// Create a Room model
const Room = mongoose.model("Hotel", roomSchema);
// Export the Room model
export default Room;
// The Room model can now be used to interact with the hotels collection in MongoDB