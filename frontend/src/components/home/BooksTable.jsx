import React from 'react';
import {Link} from "react-router-dom";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import {MdOutlineDelete} from "react-icons/md";

function BooksTable({books}) {
    return (
        <table className='w-full border-separate border-spacing-2'>
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
            {books.map((book, index) => {
                return (<tr key={book._id} className="h-8">
                    <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                    <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</td>
                    <td className='border border-slate-700 rounded-md text-center'>
                        <div className="flex justify-content gap-x-4">
                            <Link className="text-2xl text-blue-600"
                                  to={`/books/details/${book._id}`}><BsInfoCircle/></Link>
                            <Link className="text-2xl text-yellow-300"
                                  to={`/books/edit/${book._id}`}><AiOutlineEdit/></Link>
                            <Link className="text-2xl text-red-600" to={`/books/delete/${book._id}`}><MdOutlineDelete/></Link>
                        </div>
                    </td>
                </tr>)

            })}


            </tbody>
        </table>
    );
}

export default BooksTable;