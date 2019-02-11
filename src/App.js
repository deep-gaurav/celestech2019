import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './celestech/home';
import Footer from './celestech/footer';
import About from './celestech/about';
import 'typeface-roboto';
import './fonts/fonts.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>

        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Footer/>
        </div>

    </Router>
)

class App extends Component {
  render() {
    return (
      routing
    );
  }
}

export default App;
