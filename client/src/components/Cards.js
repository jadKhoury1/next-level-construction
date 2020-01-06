import React from 'react';

const cardDetails = [
    {
        id: 1,
        icon: 'shield alternate',
        title: 'Intégrité',
        description: "Nous restons fidèles à nos valeurs fondatrices de qualité, d'honnêteté et de dur labeur. NEXT LEVEL est une entreprise basée sur la confiance. "
    },
    {
        id: 2,
        icon: 'hourglass outline',
        title: 'Durabilité',
        description: 'Nous agissons de manière responsable, en tenant toujours compte de notre impact sur la planète, les personnes et les communautés dans lesquelles nous opérons.'
    },
    {
        id: 3,
        icon: 'quote right',
        title: 'Engagement',
        description: "Nous sommes proactifs dans la recherche de solutions pour nos clients qui leur permettront d’atteindre au mieux leurs objectifs. Nous comprenons que les relations durables sont la pierre angulaire de notre entreprise, nous accordons donc une attention personnelle à nos clients en nous concentrant sur eux en tant qu'individus. "
    },
    {
        id: 4,
        icon: 'lock',
        title: 'Sécurité',
        description: 'Nous ne transigerons pas sur la sécurité et la sûreté.'
    },
    {
        id: 5,
        icon: 'handshake outline',
        title: 'Travail d’équipe',
        description: "Nous reconnaissons que notre principal atout repose en nos employés. Pour réussir, NEXT LEVEL doit être un lieu de travail enrichissant. Nous fournissons des opportunités et des encouragements pour aider nos employés à atteindre leur potentiel. Nous travaillons avec nos clients en équipe. Le respect mutuel est le fondement de notre succès."
    },
    {
        id: 6,
        icon: 'gem outline',
        title: 'Qualité',
        description: 'Nous livrons la plus haute qualité dans tout ce que nous faisons'
    }
];

const renderCards = () => {
    return cardDetails.map(({ id, title, icon, description }) => {
        return (
            <div className="column" key={id}>
                <div className="ui fluid card" style={{ height: '100%', paddingTop: '20px'}}>
                    <div className="content">
                        <div className="center aligned">
                            <i className={`${icon} icon`} style={{ fontSize: '3em'}}></i>
                        </div>
                        <div className="center aligned header card-title">{title}</div>
                        <div className="center aligned description"><p>{description}</p></div>
                    </div>
                </div>
            </div>
        );
    });
}

const Cards = () => {
    return (
        <div className="ui container mg-top-40">
            <h3 className="ui centered aligned huge header primary-color">
                Nos Valeurs 
            </h3>
            <div className="ui centered alined grey sub header" style={{ margin: '15px 0 30px 0' }}>
                Next Level Construction
            </div>
            <div className="ui piled segment">
                <p>
                Notre entreprise adhère tout d’abord aux valeurs « du développement durable, qui concilie développement social, croissance économique et respect de l’environnement » 
                </p>
                <p>
                De plus, l’essence de notre travail est fondée sur l’intégrité, l’engagement et le travail d’équipe qui forment la clef de notre expertise et constitue un véritable levier de performances.
                </p>
            </div>
            <div className="ui stackable three column grid">
                {renderCards()}
            </div>
        </div>
    );
}

export default Cards;