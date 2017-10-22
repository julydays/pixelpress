import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import LocalizedStrings, { Text }  from 'react-localization';
import { strings } from '../../localization/localization';

class Home extends Component {
    // _onSetLanguageToItalian() {
    //     strings.setLanguage('it');
    //     this.setState({});
    // }

    render () {

        let strings = new LocalizedStrings({
            en:{
                how:"How do you want your egg today?",
                boiledEgg:"Boiled egg",
                softBoiledEgg:"Soft-boiled egg",
                choice:"How to choose the egg"
            },
            it: {
                how:"Come vuoi il tuo uovo oggi?",
                boiledEgg:"Uovo sodo",
                softBoiledEgg:"Uovo alla coque",
                choice:"Come scegliere l'uovo"
            }
        });

        return <section className="body">
            <div className="wrapper">

                <header className="header">
                    <h1>antidoto</h1>
                    <Text>
                        {strings.how}
                    </Text>
                </header>

                <main className="main">

                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="about" className="yellow">acerca de</Link>
                            </li>
                            <li>
                                <Link to="about" className="white">about</Link>
                            </li>
                            <li>
                                <Link to="copies" className="yellow">ejemplares</Link>
                            </li>
                            <li>
                                <Link to="copies" className="white">copies</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="img">

                    </div>

                </main>

            </div>
        </section>
    }
}

export default Home;