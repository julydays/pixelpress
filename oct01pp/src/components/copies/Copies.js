import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import './Copies.css';

class Copies extends Component {
    render () {
        const { t } = this.props;

        return <section className="body">
            <div className="secheader">
                <div>
                    <h2>order</h2>
                    <h3>antidoto</h3>
                </div>
            </div>

            <div className="secondarynav">
                <Link to='/about' className="button">{t('about')}</Link>
            </div>

            <main className="secondarymain">
                <div className="text">{t('ABOUT_TEXT_EN')}</div>
            </main>


        </section>
    }
}

export default translate('translations')(Copies);
