import React from 'react';

const Vision = () => {
    return (
        <div style={{ 
                backgroundColor: '#028417', paddingTop: '20px', textAlign: 'center',
                marginBottom: '20px'
            }}>
            <div className='ui container' style={{ height: '100%' }}>
                <div className="ui stackable grid">
                    <div className="ui eight wide column">
                        <div className="item" style={{ marginTop: '30px' }}>
                            <div className="content">
                                <p className="header" style={{ color: 'white', fontSize: '2.5em', marginBottom: 0 }}> 
                                    <span style={{ fontWeight: 'normal'}}> NOTRE </span> <strong>MISSION</strong>
                                </p>
                                <div className="description" style={{ color: 'white', fontSize: '1.2em', marginTop: '35px' }}>
                                    <p>« Notre travail est basé sur la compétence, pour mener à bien la réalisation des projets respectueux de l’environnement.</p>
                                    <p>En tant que concept, elle signifie avant tout les compétences nécessaires pour créer des constructions écologiques, offrant un rapport qualité / prix élevé. Ces compétences nous permettent de maintenir les plus hauts standards de capacité.</p>
                                    <p>C’est également la faculté physique d'entreprendre des projets qui nécessitent des équipements particularisés. Nous avons réuni une collection de machines spécialisées et polyvalentes, permettant à nos employés d’œuvrer facilement et au travail de se dérouler selon les normes et dans les délais de réalisation prescrits.</p>
                                    <p>Notre compétence est le moyen de gagner la confiance de nos clients et des personnes intéressées par les constructions écologiques. Obtenir cette confiance n'est pas une tâche facile et notre succès continu parle donc de lui-même. ».</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui eight wide column">
                        <div className="item" style={{ marginTop: '30px' }}>
                            <div className="content">
                                <p className="header" style={{ color: 'white', fontSize: '2.5em' }}> 
                                    <span style={{ fontWeight: 'normal'}}> NOTRE </span> VISION
                                </p>
                                <div className="description" style={{ color: 'white', fontSize: '1.2em' }}>
                                    <p>« Nous construisons avec l'intention de dépasser les attentes de nos clients en matière de sécurité, de qualité, de fonctionnalité et d'esthétique, et nous livrons des produits finis qui résistent à l'épreuve du temps et respectueux de l’environnement. ».</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className="item" style={{ marginTop: '30px' }}>
                            <div className="content">
                            <i 
                                className="trophy icon" 
                                style={{ marginTop: '50px', color: 'white', fontSize: '100px'}}>
                            </i>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;