
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './index.css';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Search from './components/Search';
import Logos from './components/Logos';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cards />
        <Search />
        <Logos />
      </div>
    );
  }
}

export default App;
