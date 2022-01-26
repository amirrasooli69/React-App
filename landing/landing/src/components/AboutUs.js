import React from 'react';
import { useNavigate , Link , Outlet} from 'react-router-dom';
// import Landing from './Landing';

const  AboutUs = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/');
    }
    return (
        <div>
            <h1>About Us</h1>
            <button onClick={clickHandler}>Go Home</button>
            <ul>
                <li><Link to='programmer'>programmer</Link></li>
                <li><Link to='driver'>driver</Link></li>
                {/* <li><Link to='home'>home</Link></li> */}
            </ul>
            <Outlet />
        </div>
    );
    
}

export default AboutUs;