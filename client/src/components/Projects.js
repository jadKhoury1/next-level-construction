import React from 'react';
import Building1Img from '../images/building-1.jpg';
import Building2Img from '../images/building-2.jpg';
import Building3Img from '../images/building-3.jpg';
import Building4Img from '../images/building-4.jpg';

const ProjectsInfo = [
    {
        title: "Maison d'été",
        image: Building1Img,
        imageAlt: 'Building 1',
        color: 'red'
    },
    {
        title: 'rénové',
        image: Building2Img,
        imageAlt: 'Building 2',
        color: 'green'
    },
    {
        title: 'Une maison en brique',
        image: Building3Img,
        imageAlt: 'Building 3',
        color: 'orange'
    },
    {
        title: 'appartements',
        image: Building4Img,
        imageAlt: 'Building 4',
        color: 'black'
    }
];

const renderProjects = () => {
    return ProjectsInfo.map(({ title, image, imageAlt, color }) => {
        return (
            <div className="column" key={title}>
                <div className="ui raised segment">
                    <a className={`ui ${color} ribbon label`} href="#">{title}</a>
                    <img className="ui fluid image" src={image} alt={imageAlt} style={{ height: '160px' }}/>
                </div>
            </div>
        );
    });
 
};

const Projects = () => {
    return (
        <div className="mg-top-40" >
            <div className="ui container">
                <h3 className="ui centered aligned huge header primary-color">
                    NOS PROJETS
                </h3>
                <div className="ui centered alined grey sub header" style={{ margin: '15px 0 30px 0' }}>
                    Découvrez nos projets
                </div>
                <div className="ui four column stackable grid">
                    {renderProjects()}
                </div>
            </div>
        </div>  
    );
};


export default Projects;