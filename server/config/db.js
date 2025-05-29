import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', ()=> console.log("Database connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`)
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit process with failure
  }
}

export default connectDB;