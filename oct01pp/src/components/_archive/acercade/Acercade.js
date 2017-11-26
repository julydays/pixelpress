import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import './Acercade.css';


class Acercade extends Component {
    render () {
        const { t } = this.props;

        return <section className="body">
            <div className="wrapper">

                <header className="header">
                    <h1>acerca de</h1>
                    <Link to='/'>{t('HOME')}</Link>
                </header>

                <main className="main">

                    <h2 className="white">{t('ABOUT_TEXT_ES')}</h2>

                </main>

            </div>
        </section>
    }
}

export default translate('translations')(Acercade);
