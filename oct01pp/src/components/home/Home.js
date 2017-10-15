import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


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
                                <Link to="copies" className="white">copies</Link>
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