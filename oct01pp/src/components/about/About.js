import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';


class About extends Component {
    render () {
        return <section className="body">
            <div className="wrapper">

                <header className="header">
                    <h1>about</h1>
                    <Link to='/'>home</Link>
                </header>

                <main className="main">



                </main>

            </div>
        </section>
    }
}

export default About;