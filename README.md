# 🏨 Hotel Booking Platform

A full-stack **Hotel Booking Platform** built using the MERN (MongoDB, Express, React, Node.js) stack.

This application lets users browse and book hotel rooms, hotel owners manage their listings, and admins oversee the system — all in one powerful, responsive platform.

---

## 📸 Demo

![App Screenshot](https://your-screenshot-link.com/demo.png)

---

## 🌟 Features

- User Authentication using Clerk 
- Browse & Search Hotels
- Hotel Room Booking with Date & Availability Checks
- Hotel Owner Dashboard
- User Dashboard (Bookings, Profile)
- Admin Panel (Manage Users, Hotels, Bookings)
- Reviews & Ratings System
- Stripe Payment Integration
- Mobile-Responsive Design

---

## 🛠 Tech Stack

**Client:** React, Redux / Context API, Tailwind CSS / Bootstrap  
**Server:** Node.js, Express.js, MongoDB, Mongoose  
**Authentication:** JWT, bcrypt  
**Payments:** Stripe / Razorpay  
**Deployment:** Vercel (frontend), Render / Railway / Heroku (backend), MongoDB Atlas

---

## 🏗️ Environment Variables

To run this project, set the following environment variables.

### Server `.env`
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret


### Client `.env`

REACT_APP_API_URL=http://localhost:5000
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key


---

## 💻 Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/hotel-booking-platform.git
cd hotel-booking-platform


