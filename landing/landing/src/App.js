
import React, { Component } from 'react';
import {Route , Routes , Redirect, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path='/' component={Landing } />
          <Route path='/products' component={Products } />
          <Route path='/products/:id' component={DetailsPage} />
          <Route path='/aboutus/' component={AboutUs} /> 
          <Route path='/notfound' component={NotFound } />
          {/* baraye inke masire alaki dad */}
          <Redirect to='/notfound' /> 
        </Switch>
        <Footer />
      </div>  
    );
  }
}

export default App;
