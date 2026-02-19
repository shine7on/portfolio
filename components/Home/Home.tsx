import React from 'react'
import Hero from './Hero/hero';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
// heavy thing will be here

const Home = () => {
    return <div className = "overflow-hidden">
        <Hero />
        <Services />
        <Projects />
        <Skills />
    </div>;
};

export default Home;