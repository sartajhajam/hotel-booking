import express from "express";
import {
  checkAvailabilityAPI,
  createBooking,
  getHotelBookigs,
  getUserBookings,
} from "../controllers/bookingController";
import { protect } from "../middleware/authMiddleware";

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", checkAvailabilityAPI);
bookingRouter.post("/book", protect, createBooking);
bookingRouter.get("/user", protect, getUserBookings);
bookingRouter.get("/hotel", protect, isAdmin, getHotelBookigs);

export default bookingRouter;
