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

            <main className="thumbnails">
                <div className="title1">
                    <div className="caption"> {t('TITLE_1_EN')}</div>
                </div>

                <div className="title2">
                    <div className="caption"> {t('TITLE_2_EN')}</div>
                </div>

                <div className="title1">
                    <div className="caption"> {t('TITLE_1_EN')}</div>
                </div>

            </main>

<div className="button">{t('ORDER_EN')}</div>

        </section>
    }
}

export default translate('translations')(Copies);
