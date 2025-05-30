import User from "../models/User.js";

// Middleware to check if the user is authenticated
export const protect = async (req, res, next) => {
  //when userId is not availabe
  const {userId} = req.auth;
  if (!userId) {
    res.json({success :false,message: "Unauthorized access, please login first."})
  }else {
    // we will find the user 
    const user = await User.findById(userId);
    // insert the user in request object
    req.user = user;
    next(); // call the next middleware or route handler

  }

  }
