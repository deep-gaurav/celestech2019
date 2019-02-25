import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'pace-js'
//import 'pace-js/themes/blue/pace-theme-minimal.css'
//import 'pace-js/themes/blue/pace-theme-bounce.css';
//import 'pace-js/themes/blue/pace-theme-center-radar.css';
import 'pace-js/themes/blue/pace-theme-corner-indicator.css';
//import 'pace-js/themes/blue/pace-theme-flat-top.css';
//import 'pace-js/themes/blue/pace-theme-center-radar.css'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
