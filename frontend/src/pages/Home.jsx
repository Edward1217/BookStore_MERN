import {useState,useEffect} from 'react';
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import BookListDashboard from "./BookListDashboard.jsx";
import Login from './Login.jsx'
function Home(props) {
    // const [books,setBooks] = useState([]);
    // const [loading,setLoading] = useState(false);
    // const [showType,setShowType] = useState('table');
    // useEffect(()=>{
    //     setLoading(true);
    //     axios
    //         .get('/api/books',)
    //         .then((response)=> {
    //             setBooks(response.data.data);
    //             setLoading(false);
    //
    //         })
    //         .catch((error)=>{
    //             console.log(error);
    //             setLoading(false);
    //         })
    // },[])
    return (
        // <div className='p-4'>
        //     <div className="flex justify-center items-center gap-x-4">
        //         <button onClick ={()=>{setShowType('table')}} className="bg-sky-700 rounded-lg">Table</button>
        //         <button onClick ={()=>{setShowType('card')}} className="bg-sky-700 rounded-lg">Card</button>
        //     </div>
        //     <div className="flex justify-between items-center">
        //         <h1 className="text-3xl my-8">Book List</h1>
        //         <Link to="/books/create"><MdOutlineAddBox className="text-3xl my-8" /></Link>
        //     </div>
        //     {loading ? (<Spinner/>): showType === 'table' ?(
        //         <BooksTable books={books}/>
        //     ):(<BooksCard books={books}/>)}
        //
        // </div>
        <>
            <Login/>
        </>
    );
}
export default Home;