import {useState} from 'react';
import BackButton from "../components/BackButton.jsx";
import Spinner from '../components/Spinner.jsx';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateBooks(props) {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [publishYear,setPublishYear] = useState('');
    const[loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear
        };
        setLoading(true);
        axios
            .post('http://localhost:3001/api/books',data)
            .then(()=>{
                setLoading(false);
                navigate('/')
            })
            .catch((error)=>{
                setLoading(false);
                alert('An error happened.Please check console');
            });
    };
    return (
        <div className="p-4">
            <BackButton/>
            <h1>Create a Book</h1>
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
                <button className="bg-sky-700"onClick={handleSaveBook}>
                    Save
                </button>
            </div>

        </div>
    );
}

export default CreateBooks;