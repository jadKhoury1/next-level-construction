import React from 'react';
import Ethics from './Ethics';
import SignatureImg from '../images/signature.PNG';

const Employee = () => {
    return (
        <div className="ui container mg-top-40">
             <h3 className="ui centered aligned huge header primary-color">
             	Code Éthique 
            </h3>
            <div className="ui centered alined grey sub header" style={{ margin: '15px 0 30px 0' }}>
                Pour L'employé
            </div>
            <div style={{wordSpacing: '1px', letterSpacing: '1px'}}>
                <div className="ui raised segment" >
                    <a className="ui green ribbon label"> </a>
                    <h1 className="ui header">Lettre Du Directeur</h1>
                    <div className="ui divider"></div>
                    <p>
                        Nos valeurs fondamentales forment l’essence de notre travail et de notre réussite.
                    </p>
                    <p>
                        Notre démarche se base depuis la création de NEXT LEVEL sur ces valeurs, et il nous est impératif que tout membre de la famille de NEXT LEVEL y adhère.
                    </p>
                    <p>
                        Alors que nous continuons à nous développer et à trancher dans le monde des constructions, je tiens fermement à ce que nous conservions les normes d’éthique professionnelle les plus catégoriques dans tous nos travaux, avec tous nos partenaires.
                    </p>
                    <p>
                        Notre Code de Conduite nous donne un langage commun et sert de référence pour les comportements, les actions et les décisions qui nous permettent d’incarner nos valeurs.
                    </p>
                    <p>
                        Ce Code de conduite professionnelle actualisé est un guide conçu pour guider chacun d’entre nous à agir suivant ces valeurs. C’est un outil critère pour nous assurer que nous respectons la loi, que nous prenons des décisions conformes à l’éthique. Notre Code s’applique à chacun de nous, quel que soit l’endroit où nous travaillons ou la fonction que nous occupons.
                    </p>
                    <p>
                        NEXT LEVEL est très heureuse de la gloire qu’elle a réalisée et confiante dans son avenir.
                    </p>
                    <p>
                        Afin d’atteindre nos objectifs, nous devons œuvrer ensemble pour former une société unie basée sur une seule et même vision, en nous fondant sur les bagages laissés par nos prédécesseurs et en servant d’exemple à nos successeurs. Je vous présente des remerciements pour la contribution personnelle que vous apporterez à notre objectif commun : faire en sorte que NEXT LEVEL conserve son rôle de leader tout en préservant son intégrité.
                    </p>
                    <p>
                        Cordialement 
                    </p>
                    <div style={{ position: 'relative', textAlign: 'right', paddingRight: '3vw'}}>
                        <div style={{ paddingRight: '40px' }}>Directeur Général </div>
                        <img src={SignatureImg} alt="signature" />
                    </div>
                </div>
                <div className="ui raised segment" >
                    <a className="ui blue ribbon label"> </a>
                    <h1 className="ui header">Introduction</h1>
                    <div className="ui divider"></div>
                    <h4 className="ui green header">Notre engagement envers l'excellence</h4>
                    <p>
                        Chacun de nous joue un rôle dans le maintien la réputation de l’entreprise, et ensemble, nous créons la culture de NEXT LEVEL.
                    </p>
                    <p>
                        Notre Code s’applique à chacun de nous:
                    </p>
                    <ul className="ui list">
                        <li>Tous les administrateurs, dirigeants et collaborateurs de l’entreprise </li>
                        <li>Tous les collaborateurs de nos filiales et sociétés affiliées </li>
                        <li>Toute personne qui représente NEXT LEVEL ou agit en son nom, y compris les salariés contractuels, les partenaires commerciaux et autres partenaires contractuels, les sous-traitants, les fournisseurs, les agents et les agents commerciaux</li>
                    </ul>
                    <table className="ui celled striped table">
                        <thead>
                            <tr><th colSpan="3">
                                Nous sommes tous tenus de :
                            </th>
                        </tr></thead>
                        <tbody>
                            <tr>
                            <td className="collapsing">
                                Incarner
                            </td>
                            <td>Lire et comprendre les conseils décrits dans ce Code et dans nos politiques et les vivre au quotidien.</td>
                            </tr>
                            <tr>
                            <td>
                                Mener
                            </td>
                            <td>Aider les autres membres de l’équipe à appliquer le Code en les accompagnant pour faire face aux problèmes auxquels ils sont le plus souvent confrontés dans le cadre de leurs activités..</td>
                        
                            </tr>
                            <tr>
                            <td>
                                Encourager
                            </td>
                            <td>Créer un environnement qui encourage les autres membres de l’équipe à faire part le plus tôt possible de leurs préoccupations sur le plan éthique.</td>
                        
                            </tr>
                            <tr>
                                <td>
                                    Signaler
                                </td>
                                <td>Signaler les comportements susceptibles de violer les consignes données dans notre Code et dans nos politiques.</td>
                            
                            </tr>
                            <tr>
                                <td>Stopper</td>
                                <td>Intervenir, sans hésiter, pour stopper tout agissement d’autres personnes qui serait contraire à nos politiques et à notre Code.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Ethics />
            </div>
        </div>
    )
};

export default Employee;