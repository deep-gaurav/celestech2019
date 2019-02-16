import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './celestech/home';
import Footer from './celestech/footer';
import About from './celestech/about';
import Sponsor from './celestech/contact';
import Contact from  './celestech/sponsor';
import Gallery from './celestech/gallery';
import Events from './celestech/Events';
import Header from './celestech/header';
import Schedule from './celestech/scedule';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


import 'typeface-roboto';
import './fonts/fonts.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import {createMuiTheme} from "@material-ui/core";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        error:red

    }
})


const routing = (
    <Router>

        <div>

            <MuiThemeProvider muiTheme  = {theme}>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Sponsor} />
                <Route path="/sponsor" component={Contact} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/events" component={Events} />
                <Route path="/schedule" component={Schedule} />
                <Footer/>
            </MuiThemeProvider>
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
