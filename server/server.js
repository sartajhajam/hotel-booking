import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './config/db.js';

// calling the connectDB function to establish a connection to the database
connectDB();

const app = express();

app.use(cors());  //enable cross origin resource sharing


app.get('/', (req, res) => 
  res.send('Api is working fine now  !'))
  
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));



