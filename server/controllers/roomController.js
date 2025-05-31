import Hotel from "../models/Hotel.js";

import {v2 as cloudinary} from "cloudinary";

import Room from "../models/Room.js";

// API to create a new room for hotel 

export const getRooms = async (req, res) => {
  try {
    const {roomType, pricePerNight, amenities} = req.body;
    const hotel = await Hotel.findOne({owner: req.auth.userId});
    if (!hotel) {
      return res.status(404).json({message: "Hotel not found"});

      // upload images to cloudinary
      const uploadImages = req. files.map(async(file)=> {
       const response=  await cloudinary.uploader.upload(file.path);
       return response.secure_url;
      })
    }
      // wait for all uploads to  complete 

      const images =  await Promise.all(uploadImages)

      await Room.create({
        hotel: hotel._id,
        roomType,
        pricePerNight: +pricePerNight,
        amenities:JSON.parse(amenities),
        images,
      })
      res.json({success:true,message:"Room created successfully"})      
      } catch (error) {
        res.json({success:false,message:error.message}) 


  }

}

// API to get all rooms for a specfic hotel 
export const getOwnerRooms = async (req, res) => {

}

// API to toggle availability of a room
export const toggleRoomAvailability = async (req, res) => {

} 
