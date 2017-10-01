import React, { Component } from 'react';
import './Home.css';
import logo from '../../media/img/logo.svg';

class Home extends Component {
    render () {
       return (
           <div className="center-items">
               <div>
                   <h1 className="header">Antidoto</h1>
                   <div className="center-items">
                       <img src={logo} className="App-logo" alt="logo" />
                   </div>
               </div>
           </div>
       )
    }
}

export default Home;