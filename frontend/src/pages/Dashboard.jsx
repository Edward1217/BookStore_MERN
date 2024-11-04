import {useContext} from 'react';
import {UserContext} from '../context/userContext.jsx'
function Dashboard(props) {
    const {user} = useContext(UserContext);

    return (
        <div>
            <h1>Dashboard</h1>
            {!!user && (<h2>hi {user.name}!</h2>)}
        </div>
    );
}

export default Dashboard;