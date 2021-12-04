import React, { Component } from 'react';
import { useNavigate , Link , Routes , Route} from 'react-router-dom';
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
            <Routes>
                <Route path='programmer' element={<h1>Programmer page</h1>} />
                <Route path='driver' element={<h1>Driver page</h1>} />
                {/* <Route path='home' element={<Landing />} /> */}
            </Routes>
        </div>
    );
    
}

export default AboutUs;