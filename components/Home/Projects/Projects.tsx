import Image from "next/image";
import React from "react";

const Projects = () => {
    return (
    <div className="pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            Recent {" "}
            <span className="text-pink-400">Projects</span>
        </h1>
        <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
            { /* 1st project */}
            <div>
                <Image src="/images/p1.jpg" 
                alt='image' 
                width={500} 
                height={300} 
                className="rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] 
                hover:shadow-[0_0_70px_rgba(236,72,153,0.8)]
                transition-all duration-300"/>
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                    Portfolio
                </h1>
                <h1 className="pt-2 font-medium text-white/80">
                    TypeScript, React, Tailwind CSS
                </h1>
            </div>
            { /* 2nd project */}
            <div>
                <Image src="/images/p2.jpg" 
                alt='image' 
                width={500} 
                height={300} 
                className="rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] 
                hover:shadow-[0_0_70px_rgba(236,72,153,0.8)]
                transition-all duration-300"/>
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                    Dog Vet Tracking System
                </h1>
                <h1 className="pt-2 font-medium text-white/80">
                    Python, Django
                </h1>
            </div>
            { /* 3rd project */}
            <div>
                <Image src="/images/p3.jpg" 
                alt='image' 
                width={500} 
                height={300} 
                className="rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] 
                hover:shadow-[0_0_70px_rgba(236,72,153,0.8)]
                transition-all duration-300"/>
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                    Smart Feeder System
                </h1>
                <h1 className="pt-2 font-medium text-white/80">
                    C, Python, Arduino
                </h1>
            </div>
            { /* 4th project */}
            <div>
                <Image src="/images/p4.jpg" 
                alt='image' 
                width={500} 
                height={300} 
                className="rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] 
                hover:shadow-[0_0_70px_rgba(236,72,153,0.8)]
                transition-all duration-300"/>
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                    Escape Room
                </h1>
                <h1 className="pt-2 font-medium text-white/80">
                    Kotlin, Java
                </h1>
            </div>
        </div>
    </div>
    );
};

export default Projects;