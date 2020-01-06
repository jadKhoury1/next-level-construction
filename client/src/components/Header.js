import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from '../history';




const Header = ({ active, setActive}) => {
   
    const [ dropdownActive, setDropdownActive] = useState(false);
    

    const renderSections = () => {
        return (
            <React.Fragment>
                <Link 
                    className={`item ${active === '/' ? 'active': ''}`} 
                    to="/"
                    onClick={() => {
                        setActive('/');
                        window.scrollTo(0, 0);
                    }}
                >
                    Accueil
                </Link>
                <a 
                    href="#nos-valeurs"
                    className={`item ${active === '/#nos-valeurs' ? 'active': ''}`}
                    onClick={() => {
                        setActive('/#nos-valeurs');
                        history.push('/#nos-valeurs');
                    }}
                > 
                    Nos Valeurs
                </a>
                <a 
                    href="#projects"
                    className={`item ${active === '/#projects' ? 'active': ''}`}
                    onClick={() => {
                        setActive('/#projects');
                        history.push('/#projects');
                    }}
                > 
                    Nos Projets
                </a>
                <Link 
                    className={`item ${active === '/aboutUs' ? 'active': ''}`} 
                    to="/aboutUs"
                    onClick={() => {
                        setActive('/aboutUs');
                        window.scrollTo(0, 0);
                    }}
                >
                    L’ entreprise
                </Link>
                <Link 
                    className={`item ${active === '/contactUs' ? 'active' : ''}`} 
                    to="/contactUs"
                    onClick={() => {
                        setActive('/contactUs');
                        window.scrollTo(0, 0);
                    }}
                >
                    Contactez-nous 
                </Link>
            </React.Fragment>
        );
    };
    
    const renderNav = () => {
        return (
            <div style={{ minHeight: '40px',}} className="hide-on-mobile">
                <div className="ui secondary large pointing fixed menu" style={{ marginBottom: 0, backgroundColor: 'white'}}>
                    <div className="ui container">
                    {renderSections()}
                    </div>
                </div>
            </div>
        );
    };

    const renderMobileNav = () => {
        
        return (
                <div style={{ minHeight: '40px'}} className="hide-on-computer">
                    <div className="ui fixed inverted main menu">
                        <div className="ui dropdown icon item"  onClick={() => setDropdownActive(!dropdownActive) }>
                            <i 
                                className="content icon" 
                            ></i>
                            <div 
                                className="menu" 
                                style={{ display: dropdownActive === true ? 'block' : 'none', minWidth: '300px'}}
                            >
                                {renderSections()}
                            </div>
                        </div>
                    </div>
                </div>
    
        );
    };

    return (
        <div>
            {renderNav()}
            {renderMobileNav()}
        </div>
    );
};

export default Header;