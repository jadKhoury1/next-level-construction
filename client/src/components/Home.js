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
            <Cards />
            <Team />
            <Projects />
        </div>
    );
};

export default Home;