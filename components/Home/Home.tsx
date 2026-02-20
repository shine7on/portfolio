import React from 'react'
import Hero from './Hero/hero';
// import Services from './Services/Services';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Research from './Research/Research';

const Home = () => {
    return <div className = "overflow-hidden">
        <Hero />
        <Skills />
        <Projects />
        <Research />
        <Contact />
    </div>;
};

export default Home;