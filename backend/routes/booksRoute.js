import {Book} from "../models/bookModel.js";
import express from 'express';
const router = express.Router();


//Route for Save a new Book
router.post('/',async (request,response)=> {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message:"Send all required fields: title, author, publishYear",
            });
        }
        const book = await Book.create(request.body);
        return response.status(200).send(book);

    } catch (error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})
//Route get all books from database
router.get('/',async(request,response)=> {
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count:books.length,
            data:books
        });
    } catch(error) {
        console.log(error.message)
    }
})

// Route for get one book from database by id
router.get('/:id',async(request,response)=>{
    try {
        const userId = request.params.id;
        const book = await Book.findById(userId);
        return response.status(200).json({
            book
        })
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
})
//Route for update a book
router.put('/:id',async(request,response)=>{
    try{
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({message:'Send all required fields: title, author, publishYear'})
        }
        const userId = request.params.id;
        const result = await Book.findByIdAndUpdate(userId,request.body);
        if (!result) {
            return response.status(404).json({message:'Book not found'});
        }
        return response.status(200).send({message:'Book updated successfully'})
    } catch(error) {
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

//Route for Delete a book
router.delete('/:id',async(request,response)=>{
    try {
        const userID = request.params.id;
        const result = await Book.findByIdAndDelete(userID,request.body);
        if (!result) {
            return response.status(404).json({message:'Book not found'});
        }
        return response.status(200).send({message:'Book deleted successfully'})
    } catch(error) {
        console.log(error.message)
        response.status(500).send({message:error.message});
    }
})

export default router;