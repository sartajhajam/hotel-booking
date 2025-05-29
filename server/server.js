import express from 'express';
import "dotenv/config";
import cors from 'cors';

const app = express();

app.use(cors());  //enable cross origin resource sharing


app.get('/', (req, res) => 
  res.send('Api is working fine !'))
  
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));



