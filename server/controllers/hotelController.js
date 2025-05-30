import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

// API to get all hotels
export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;  
    const owner = req.user._id; // Get the owner from the authenticated user
    // check if hote is already registered as hotel owner
    const hotel = await User.findById(owner);
    if (hotel) {
      return res.status(400).json({ success: false, message: "You are already registered as a hotel owner." });
    }
    // Create a new hotel
    await Hotel.create({
      name,
      address,
      contact,
      owner,
      city
    });
    // Update the user role to hotelOwner
    await User.findByIdAndUpdate(owner, { role: 'hotelOwner' }, { new: true });
    res.json({ success: true, message: "Hotel registered successfully." });


  }catch (error)
  {
    res.status(500).json({ success: false, message: error.message });

  }

}


