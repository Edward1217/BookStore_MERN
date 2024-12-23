import React,{useState} from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {Link,useNavigate} from "react-router-dom";

function Login(props) {
    const [data,setData]=useState({
        email:'',
        password:'',
    })
    const navigate = useNavigate();
    const loginUser = async (e)=>{
        e.preventDefault()
        const {email,password} = data
        try {
            const response = await axios.post('/api/login',{
                email,
                password
            });
            const responseData = response.data

            if (responseData.error) {
                toast.error(responseData.error)
            } else {
                setData({ email: '', password: '' });
                toast.success(responseData.message);
                navigate('/books/booklist');
            }
        } catch(error) {
            console.log(error);
            toast.error('An error occurred. Please try again.');
        }
    }

    return (
        <div>
            <Toaster/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form  className="space-y-6" onSubmit={loginUser}>
                        <div>
                            <label className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData({...data, email: e.target.value})}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData({...data, password: e.target.value})}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Have Not a member?{' '}
                        <Link to={'/books/signup'}>
                            <span className="font-semibold text-indigo-600 hover:text-indigo-500">Sign up</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;