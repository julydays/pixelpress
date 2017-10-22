import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import LocalizedStrings, { Text }  from 'react-localization';
import { strings } from './localization/localization';
import './index.css';
import Home from './components/home/Home';
import Copies from './components/copies/Copies';
import About from './components/about/About';
import registerServiceWorker from './registerServiceWorker';


const Root = () => {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Home}/>
                <Route exact path='/copies' component={Copies}/>
                <Route exact path='/about' component={About}/>

            </div>
        </Router>
    )
};
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
