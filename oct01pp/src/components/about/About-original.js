import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import './About.css';


class About extends Component {
    render () {
        const { t } = this.props;

        return <section className="body">
            <div className="secheader">

                    <h2>about</h2>

            </div>
            <div className="secondarynav">

                <Link to='/copies' className="button">{t('copies')}</Link>
            </div>
                <main className="secondarymain">

                    <div className="text">{t('ABOUT_TEXT_EN')}</div>

                </main>


        </section>
    }
}

export default translate('translations')(About);
