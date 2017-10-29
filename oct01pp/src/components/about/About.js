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

<<<<<<< HEAD
                <main className="main">
=======
            </div>
            <div className="secondarynav">

                <Link to='/copies' className="button">{t('copies')}</Link>
            </div>
                <main className="secondarymain">
>>>>>>> 4a7c59f823651983c58f7b9eed371997b0486a16

                    <h2 className="white">{t('ABOUT_TEXT_EN')}</h2>

                </main>

            </div>
        </section>
    }
}

export default translate('translations')(About);
