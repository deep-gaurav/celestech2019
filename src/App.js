import React, { Component } from 'react';
import Home from './celestech/home';
import Footer from './celestech/footer';
import 'typeface-roboto';
import './fonts/fonts.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
