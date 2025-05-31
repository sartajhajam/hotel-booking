// API to create a new room for hotel 

export const getRooms = async (req, res) => {
  try {
    const {roomType, pricePerNight, amenities} = req.body;
    const hotel = await Hotel.findOne({owner: req.auth.userId});
    if (!hotel) {
      return res.status(404).json({message: "Hotel not found"});

      
    }


  } catch (error) {

  }

}

// API to get all rooms for a specfic hotel 
export const getOwnerRooms = async (req, res) => {

}

// API to toggle availability of a room
export const toggleRoomAvailability = async (req, res) => {

} 
