import React from 'react';
import ImageIntro from './ImageIntro';
import Vision from './Vision';
import Cards from './Cards';
import Team from './Team';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <ImageIntro />
            <Vision />
            <div id="nos-valeurs"></div>
            <Cards />
            <Team />
             <div id="projects"></div>
            <Projects />
            
        </div>
    );
};

export default Home;