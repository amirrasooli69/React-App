import React, { Component } from 'react';
import { Link  , Route, Redirect} from 'react-router-dom';
import Programmers from './Programmers';
import Drivers from './Drivers';
// import Landing from './Landing';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <ul>
                    <li><Link to='/aboutus/programmer'>programmer</Link></li>
                    <li><Link to='/aboutus/driver'>driver</Link></li>
                    {/* <li><Link to='home'>home</Link></li> */}
                </ul>
                    <Route path='/aboutus/programmer' component={Programmers} />
                    <Route path='/aboutus/driver' component={Drivers} />
                    {/* <Route path='home' element={<Landing />} /> */}
            </div>
        );
    }
}

export default AboutUs;
