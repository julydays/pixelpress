import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from './components/home/Home';
import Copies from './components/copies/Copies';
import About from './components/about/About';
import './index.css';

// localization dependencies
import { I18nextProvider } from 'react-i18next';
import i18n from './assets/localization/i18n';

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

ReactDOM.render(<I18nextProvider i18n={ i18n }><Root /></I18nextProvider>, document.getElementById('root'));
registerServiceWorker();
