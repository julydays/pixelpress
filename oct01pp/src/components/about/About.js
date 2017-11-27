import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import './About.css';



class About extends Component {
    render () {
        const { t } = this.props;

        return <section_a className="body">
            <div className="secheader">
                <div>
                    <h2>{t('ABOUT')}</h2>
                    <Link to="/" className="home-anchor">antidoto</Link>
                </div>
            </div>

            <div className="secondarynav">
                <Link to='/copies' className="button">{t('COPIES')}</Link>
            </div>

            <main className="secondarymain">
                <div className="text">{t('ABOUT_TEXT')}</div>
            </main>

        </section_a>

    }
}

export default translate('translations')(About);
