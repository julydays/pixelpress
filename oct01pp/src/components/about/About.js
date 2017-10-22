import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import './About.css';


class About extends Component {
    render () {
        const { t } = this.props;

        return <section className="body">
            <div className="wrapper">

                <header className="header">
                    <h1>about</h1>
                    <Link to='/'>{t('HOME')}</Link>
                </header>

                <main className="main">

                    <h2 className="white">{t('LANGUAGE')}</h2>

                </main>

            </div>
        </section>
    }
}

export default translate('translations')(About);
