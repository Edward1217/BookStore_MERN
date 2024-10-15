import { useState,useEffect } from 'react';
import axios from 'axios';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import CreateBooks from "./pages/CreateBooks.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";

function App() {
    axios.get('http://localhost:3001/books').then(
        response => console.log(response)
    )
  const [count, setCount] = useState(0)

  return (
      <>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/books/create' element={<CreateBooks/>}></Route>
              <Route path='/books/details/:id' element={<ShowBook/>}></Route>
              <Route path='/books/edit/:id' element={<EditBook/>}></Route>
              <Route path='books/delete/:id' element={<DeleteBook/>}></Route>
          </Routes>
      </>
  )
}

export default App
