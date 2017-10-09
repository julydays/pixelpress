import React, { Component } from 'react';
import './Home.css';
import bg from '../../media/img/bg.png';

class Home extends Component {
    render () {
        return <section className="body">
            <div className="wrapper">

                <header className="header">
                    <h1>antidoto</h1>
                </header>

                <main className="main">

                    <div className="nav">
                        <ul>
                            <li>
                                <a href="" className="yellow">acerca de</a>
                            </li>
                            <li>
                                <a href="" className="white">about</a>
                            </li>
                            <li>
                                <a href="" className="yellow">ejemplares</a>
                            </li>
                            <li>
                                <a href="" className="white">copies</a>
                            </li>
                        </ul>
                    </div>
                    <div className="img">

                    </div>

                </main>

            </div>
        </section>
    }
}

export default Home;