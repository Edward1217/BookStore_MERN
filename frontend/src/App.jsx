import { useState,useEffect } from 'react';
import axios from 'axios';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import CreateBooks from "./pages/CreateBooks.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import Login from "./pages/Login.jsx";
import Signup from'./pages/Signup.jsx';
import {UserContextProvider} from './context/userContext.jsx';
import Dashboard from "./pages/Dashboard.jsx";
import BookListDashboard from "./pages/BookListDashboard.jsx";
function App() {
    // axios.get('http://localhost:3001/books').then(
    //     response => console.log(response)
    // )
  const [count, setCount] = useState(0)

  return (
      <UserContextProvider>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/books/create' element={<CreateBooks/>}/>
              <Route path='/books/details/:id' element={<ShowBook/>}/>
              <Route path='/books/edit/:id' element={<EditBook/>}/>
              <Route path='/books/delete/:id' element={<DeleteBook/>}/>
              <Route path="/books/login" element={<Login/>}/>
              <Route path="/books/signup" element={<Signup/>}/>
              <Route path='/books/dashboard' element={<Dashboard/>}/>
              <Route path='/books/booklist' element={<BookListDashboard/>}/>
          </Routes>
      </UserContextProvider>
  )
}

export default App
