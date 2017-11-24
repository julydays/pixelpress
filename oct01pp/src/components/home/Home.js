import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import './Home.css';


class Home extends Component {
    render () {
        const { i18n } = this.props;

        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };

        return <section className="body">
            <div className="wrapper">

                <header className="header">
                    <h1>antidoto</h1>
                </header>

                <main className="main">

                    <div className="nav">
                        <ul>
                            <li onClick={() => changeLanguage('es')}>
                                <Link to="about" className="yellow">acerca de</Link>
                            </li>
                            <li onClick={() => changeLanguage('en')}>
                                <Link to="about" className="white">about</Link>
                            </li>
                            <li onClick={() => changeLanguage('es')}>
                                <Link to="copies" className="yellow">ejemplares</Link>
                            </li>
                            <li onClick={() => changeLanguage('en')}>
                                <Link to="copies" className="white">copies</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="img">

                    </div>
                </main>

            </div>
            <footer className="footer">info@antidoto.global</footer>
        </section>
    }
}

export default translate('translations')(Home);
