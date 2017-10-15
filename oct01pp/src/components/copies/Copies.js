import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Copies.css';


class Copies extends Component {
    render () {
        return <section className="body">
            <div className="wrapper">

                <header className="header">
                    <h1>copies</h1>
                    <Link to='/'>home</Link>
                </header>

                <main className="main">



                </main>

            </div>
        </section>
    }
}

export default Copies;