import express, {query} from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import bookRoute from './routes/booksRoute.js';
import authRoute from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(express.static('dist'))
app.use(cors());

//middleware for parsing request body
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

app.use('/api/books',bookRoute);
app.use('/api',authRoute);

const mongoDBURL = process.env.mongoDBURL
mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("Connected to MongoDB!")
    })
    .catch((error)=>{
        console.log(error)
    })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})