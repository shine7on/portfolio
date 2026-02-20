'use client';
import React from "react";
import { SiAutodesk, SiDjango, SiJavascript, 
         SiNextdotjs, 
         SiNodedotjs, 
         SiPython, 
         SiReact, 
         SiTailwindcss, 
         SiTypescript } 
         from "react-icons/si";

import Tilt from 'react-parallax-tilt';

const skills = [
    {
        name:'Python',
        icon:<SiPython />,
    },
    {
        name:'Django',
        icon:<SiDjango/>,
    },
    {
        name:'TypeScript',
        icon:<SiTypescript />,
    },
    {
        name:'React',
        icon:<SiReact />,
    },
    {
        name:'Next.js',
        icon:<SiNextdotjs />,
    },
    {
        name:'Tailwind CSS',
        icon:<SiTailwindcss />,
    },
    {
        name:'Fusion360',
        icon:<SiAutodesk/>,
    },
];

const Skills = () => {
    return <div id="skills" className="text-white pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            About {" "}
            <span className="text-pink-400">Me</span>
        </h1>
        <h1 className="text-center text-white pt-10">
            こんにちは！ I'm Shinon.<br />
            I'm particularly interested in projects related to dogs and pet care.<br />
            When I'm not coding, I'm walking my dog ( Pablo🐶 ) or dancing at studio 🎧
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
            {skills.map((skil)=>{
                return <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
                    <div className="bg-[#14134145] text-center w-30 h-38 rounded-3xl flex flex-col
                    items-center justify-center shadow-lg transition hover:scale-100">
                        <div className="text-5xl mb-5 text-gray-300">{skil.icon}</div>
                        <p className="text-pink-400 mt-1 font-semibold font-mono">{skil.name}</p>
                    </div>
                </Tilt>
            })}
        </div>
    </div>
};

export default Skills;