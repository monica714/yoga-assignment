 // server.js
 import express from 'express';
 import bodyParser from 'body-parser';
 import dotenv from 'dotenv';
 import cors from "cors"
 

 //import files
import connectDB from './config/db.js';
import formRoutes from './routes/formRoutes.js';
import batchRoutes from "./routes/batchRoutes.js"

//OBJECT
const app = express();
app.use(cors());

app.use(bodyParser.json());

//dotenv config
dotenv.config();

//Mongodb connection
connectDB();


//Routes
app.use(formRoutes);
app.use(batchRoutes);

//PORT
const PORT =process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
