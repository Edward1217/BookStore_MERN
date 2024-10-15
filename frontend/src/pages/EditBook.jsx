import {useState,useEffect} from 'react';
import BackButton from "../components/BackButton.jsx";
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
function EditBook(props) {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [publishYear,setPublishYear] = useState('');
    const[loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();
    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:3001/api/books/${id}`)
            .then((response)=>{
                setTitle(response.data.book.title);
                setAuthor(response.data.book.author);
                setPublishYear(response.data.book.publishYear);
                setLoading(false);
            })
            .catch((error)=>{
                setLoading(false);
                alert('An error happened. Please check console')
                console.log(error)
            })
    },[])
    const handleEditBook =() =>{
        const data = {
            title,
            author,
            publishYear
        };
        setLoading(true);
        axios.put(`http://localhost:3001/books/${id}`,data)
            .then((response)=>{
                setLoading(false)
                console.log(response);
                enqueueSnackbar('Book Edited successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error)=>{
                setLoading(false);
                console.log(error);
            })
    }
    return (
        <div>
            <BackButton/>
            <h1>Edit Book</h1>
            {loading ? <Spinner/> : ''}
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-slate-700"
                />
            </div>
            <div>
                <label>Author</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="border border-slate-700"
                />
            </div>
            <div>
                <label>PublishYear</label>
                <input
                    type="number"
                    value={publishYear}
                    onChange={(e) => setPublishYear(e.target.value)}
                    className="border border-slate-700"
                />
            </div>
            <div>
                <button className="bg-sky-700" onClick={handleEditBook}>
                    Save
                </button>
            </div>

        </div>
    );
}

export default EditBook;