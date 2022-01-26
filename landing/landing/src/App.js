
import React, { Component } from 'react';
import {Route , Routes , Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import './index.css';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import DetailsPage from './components/DetailsPage';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<DetailsPage />} />
          <Route path='/aboutus/*' element={<AboutUs />} > 
            <Route path='programmer' element={<h1>Programmer page</h1>} />
            <Route path='driver' element={<h1>Driver page</h1>} />
          </Route>
          <Route path='/notfound' element={<NotFound />} />
          {/* baraye inke masire alaki dad */}
          <Route path='/*' element={<Navigate to='/notfound'/>} /> 
        </Routes>
        <Footer />
      </div>  
    );
  }
}

export default App;
