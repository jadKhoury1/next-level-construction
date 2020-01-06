import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../images/logo.jpeg';
import history from '../history';

const Footer = ({ setActive }) => {
    return (
        <footer>
            <div className="ui container">
                <div className="ui stackable grid">
                    <div 
                        className="ui five wide column footer-logo-container" 
                        style={{
                            textAlign: 'center', 
                            backgroundImage: `url("${LogoImg}")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                        
                    >
                       
                    </div>
                    <div className="ui two wide column footer-section">
                        <div className="ui list">
                            <div className="item footer-section-title">EXPLORER</div>
                            <Link className="item" to="/" onClick={() => {
                                window.scrollTo(0, 0);
                                setActive('/');
                            }}>Accueil</Link>
                            <a className="item" href="#nos-valeurs" onClick={() => {
                                history.push('/#nos-valeurs');
                                setActive('/#nos-valeurs')
                            }}>Nos Valeurs</a>
                            <a className="item" href="#projects" onClick={() => {
                                history.push('/#projects');
                                setActive('/#projects');
                            }} >Nos Projets</a>
                            <Link className="item" to="/aboutUs" onClick={() => {
                                window.scrollTo(0, 0);
                                setActive('/aboutUs');
                            }}>L’ entreprise</Link>
                            <Link className="item" to="/contactUs" onClick={() => {
                                window.scrollTo(0, 0);
                                setActive('/contactUs');
                            }} >Contactez-nous </Link>
                            <Link className="item" to="/employee" onClick={() => {
                                window.scrollTo(0, 0);
                                setActive('/employee');
                            }}>
                                Code éthique
                            </Link>
                        </div>
                    </div>
                    <div className="ui six wide column footer-section">
                        <div className="ui list">
                         <div className="item footer-section-title">CONTACTEZ-NOUS</div>
                            <div className="item">
                                <i className="white large map marker alternate icon"></i>
                                <div className="content">
                                    Campus des sciences et technologies, Mar Roukos - Mkallès
                                </div>
                            </div>
                            <div className="item">
                                <i className="white clockwise rotated large phone icon"></i>
                                <div className="content">
                                    +961 (4) 915700
                                </div>
                            </div>
                            <div className="item">
                                <i className="white large envelope outline icon"></i>
                                <div className="content">
                                    next-level@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui three wide column footer-section">
                        <div className="ui list">
                            <div className="item footer-section-title">SUIVEZ NOUS</div>
                            <a className="item" href="#" target="_blank" rel="noopener noreferrer" >
                                <i className="white large facebook icon"></i>
                                <div className="content">
                                    Facebook
                                </div>
                            </a>
                            <a className="item" href="#" target="_blank"rel="noopener noreferrer" >
                                <i className="white large instagram icon"></i>
                                <div className="content">
                                    Instagram
                                </div>
                            </a>
                            <a className="item" href="#" target="_blank" rel="noopener noreferrer" >
                                <i className="white large linkedin icon"></i>
                                <div className="content">
                                    linkedin
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;