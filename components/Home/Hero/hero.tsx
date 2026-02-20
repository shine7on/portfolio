"use client";
// top area of the website: hero images, text effects
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
import VantaCloudsBackground from "./CloudBackground";

const Hero = () => {
    return <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">

        <VantaCloudsBackground/>
        <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
                Hi! I'm {" "}
                <span className="text-pink-400">Shinon</span>
            </h1>
            <h2 className="mt-5 text-sm px-2 sm:text-2xl font-medium flex items-center gap-2">
                A Passionate
                <span className="text-pink-400 font-bold">
                    <Typewriter options={{
                        strings:[
                            "Frontend Developer",
                            "Backend Developer",
                            "Web Developer",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        wrapperClassName: "p1-2",
                    }}/>
                </span>
            </h2>
            <button className="mt-6 px-10 py-4 bg-linear-to-r from-pink-600 via-pink-500 to-pink-600 
            hover:from-pink-500 hover:via-pink-400 hover:to-pink-500
            transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
                <span>See my work</span>
                <BsArrowRight className="w-5 h-5 ml-2 inline-block" />

            </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </div>;
};


export default Hero;

/*
<Image 
                src="/images/s1.jpg" 
                alt="heroimage" 
                width={150} 
                height={150} 
                className="rounded-full border-8 border-[#0c0c48aa]"/>
*/