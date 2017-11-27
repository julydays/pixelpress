import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import './Copies.css';


class Copies extends Component {
    render () {
        const { t } = this.props;

        return <section_a className="body">
            <div className="secheader">
                <div>
                    <Link to="/" className="home-anchor">antidoto</Link>
                    <h2>{t('COPIES')}</h2>

                </div>
            </div>

            <div className="secondarynav">
                <Link to='/about' className="button">{t('ABOUT')}</Link>
            </div>

            <main>
                <div className="thumbnails">

                    <div className="card">
                        <div className="caption"> {t('TITLE_1')}</div>
                        <div className="background_1"></div>
                    </div>

                    <div className="card">
                        <div className="caption"> {t('TITLE_2')}</div>
                        <div className="background_2"></div>
                    </div>

                </div>
            </main>

            <p className="info">{t('ORDER')}</p>

        </section_a>
    }
}

export default translate('translations')(Copies);
