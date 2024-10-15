import {useState,useEffect} from 'react';
import BackButton from "../components/BackButton.jsx";
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function DeleteBook(props) {
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const handleDeleteBook= ()=> {
        setLoading(true);
        axios
            .delete(`http://localhost:3001/api/books/${id}`)
            .then(()=>{
                setLoading(false);
                enqueueSnackbar('Book Deleted successfully', { variant: 'error' });
                navigate('/');
            })
            .catch((error)=>{
                setLoading(false);
                alert("Error");
                console.log(error)
            })
    }
    return (
        <div>
            <BackButton/>
            <h1>Delete a Book</h1>
            {loading ? <Spinner/> : ''}
            <div>
                <h3>Are you sure you want to delete this book?</h3>
            </div>
            <button className ="bg-sky-700 rounded-lg" onClick={handleDeleteBook}>
                Yes,I did
            </button>
        </div>
    );
}

export default DeleteBook;