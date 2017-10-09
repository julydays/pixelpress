import React, { Component } from 'react';
import './Home.css';
import bg from '../../media/img/bg.png';

class Home extends Component {
    render () {
        return <div className="body">
            <h1 className="header">antidoto</h1>
           <div>
               <img src={bg} className="bg-img"/>
           </div>
        </div>
    }
}

export default Home;