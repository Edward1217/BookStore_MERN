import axios from 'axios';
import {createContext,useState,useEffect} from 'react';

export const UserContext = createContext({ })

export function UserContextProvider ({children}) {
    const [user,setUser] = useState(null);
    // useEffect(()=>{
    //     if (!user) {
    //         axios.get('/api/profile').then(({data}) => {
    //             console.log('Fetched user:', data);
    //             setUser(data)
    //         }).catch(error => {
    //             console.log('Error fetching user:', error);
    //         })
    //     }
    // },[])
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Parse the stored user object
        }
    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}