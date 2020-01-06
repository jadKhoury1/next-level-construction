import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import history from '../history';

const Header = () => {
    const [ active, setActive ] = useState('/');
    
    useEffect(() => {
        setActive(history.location.pathname);
    }, []);
    
    return (

            <div className="ui  secondary large pointing menu" style={{ marginBottom: 0 }}>
                <div className="ui container">
                    <Link 
                        className={`item ${active === '/' ? 'active': ''}`} 
                        to="/"
                        onClick={() => setActive('/')}
                    >
                        Accueil
                    </Link>
                    <a 
                        href="#nos-valeurs"
                        className={`item`}
                        onClick={() => history.push('/#nos-valeurs')}
                    > 
                        Nos Valeurs
                    </a>
                    <a 
                        href="#projects"
                        className={`item`}
                        onClick={() => history.push('/#projects')}
                    > 
                        Nos Projets
                    </a>
                    <Link 
                        className={`item ${active === '/aboutUs' ? 'active': ''}`} 
                        to="/aboutUs"
                        onClick={() => setActive('/aboutUs')}
                    >
                        L’ entreprise
                    </Link>
                    <Link 
                        className={`item ${active === '/contactUs' ? 'active' : ''}`} 
                        to="/contactUs"
                        onClick={() => setActive('/contactUs')}
                    >
                        Contactez-nous 
                    </Link>
                </div>
            </div>
        
    );
};

export default Header;