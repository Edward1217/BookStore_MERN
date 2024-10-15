import express, {query} from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import bookRoute from './routes/booksRoute.js';
import cors from 'cors';
const app = express();
dotenv.config();

app.use(cors());

// app.use(
//     cors({
//         original:'http://localhost:3001',
//         method:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// )
//middleware for parsing request body
app.use(express.json());


//Route for get a response from server
app.get('/',(request,response)=>{
    console.log(request)
    return response.send('Welcome To MERN Stack Tutorial')
});

app.use('/books',bookRoute);

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