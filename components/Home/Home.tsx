import React from 'react'
import Hero from './Hero/hero';
import Services from './Services/services'
// heavy thing will be here

const Home = () => {
    return <div className = "overflow-hidden">
        <Hero />
        <Services />
    </div>;
};

export default Home;