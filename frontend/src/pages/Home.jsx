import {useState,useEffect} from 'react';
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

function Home(props) {
    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        axios
            .get('http://localhost:3001/books')
            .then((response)=> {
                setBooks(response.data.data);
                setLoading(false);

            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            })
    },[])
    return (
        <div className='p-4'>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Book List</h1>
                <Link to="/books/create"><MdOutlineAddBox className="text-3xl my-8" /></Link>
            </div>
            {loading ? (<Spinner/>):(
                <table className='w-full border-separate border-spacing-2' >
                    <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md'>No</th>
                        <th className='border border-slate-600 rounded-md'>Title</th>
                        <th className="border border-slate-600 rounded-md max-min:hidden">Author</th>
                        <th className="border border-slate-600 rounded-md max-min:hidden">PublishYear</th>
                        <th className='border border-slate-600 rounded-md'>Operation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book,index)=>{
                        return (<tr key={book._id} className="h-8">
                            <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                            <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
                            <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                <div className="flex justify-content gap-x-4">
                                    <Link className="text-2xl text-blue-600" to={`/books/details/${book._id}`}><BsInfoCircle/></Link>
                                    <Link className="text-2xl text-yellow-300"to={`/books/edit/${book._id}`}><AiOutlineEdit/></Link>
                                    <Link className="text-2xl text-red-600" to={`/books/delete/${book._id}`}><MdOutlineDelete/></Link>
                                </div>
                            </td>
                        </tr>)

                    })}


                    </tbody>
                </table>

            )}

        </div>
    );
}

export default Home;