import React from 'react';
import EmilioImg from '../images/Emilio.jpeg';
import MichelleImg from '../images/Michelle.PNG';


const TeamInfo = [
    {
        image: EmilioImg,
        name: 'Emilio Salameh',
        occupation: 'Fondateur',
        description: "Emilio, ancien ministre des travaux publics, est un ingénieur civil titulaire d'un master de l'Ecole Supérieure d'Ingenieurie de Beyrouth. Il a plus de 20 ans d'expérience au sein du groupe Erga et au ministère des Travaux publics au Liban."
    },
    {
        image: MichelleImg,
        name: 'Michele Abboud',
        occupation: 'Fondatrice',
        description: "Michele est une ingénieure civil titulaire d'un doctorat de l'Universite Paris-Sorbonne . Elle a plus de 20 ans d'expérience au sein de l'Universite Saint-Joseph de Beyrouth et a Dar Al Handasah."
    }
];

const renderTeam = () => {
    return TeamInfo.map(({ image, name, occupation, description}) => {
        return (
            <div className="column" key={name}>
                <div className="ui raised card" style={{ height: '440px', margin: '0 auto'}}>
                    <div className="image" style={{ height: '250px'}}>
                        <img src={image} style={{ height: '100%'}} alt={name}/>
                    </div>
                    <div className="content">
                        <a className="header" href="#">{name}</a>
                        <div className="meta">
                            <span className="date">{occupation}</span>
                        </div>
                        <div className="description">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const Team = () => {
    return ( 
        <div className="mg-top-40" style={{ backgroundColor: '#edf2f5', padding: '20px 0 40px'}} id="team">
            <div className="ui container">
                <h3 className="ui centered aligned huge header primary-color">
                    Nos Fondateurs
                </h3>
                <div className="ui centered alined grey sub header" style={{ margin: '15px 0 30px 0' }}>
                    Rencontrez notre équipe
                </div>
                <div className="ui stackable three column grid" style={{ justifyContent: 'center' }}>
                    {renderTeam()}
                </div>
            </div>
        </div>  
    );
};

export default Team;