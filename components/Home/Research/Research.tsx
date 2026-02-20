import React from 'react'
import { BiDownload, BiMap } from 'react-icons/bi';
import { BsAt, BsAward } from 'react-icons/bs';

const Research = () => {
    return (
    <div id="research" className='pt-16 pb-16'>
        <div>
            <h1 className='text-pink-400 text-3xl sm:text-4xl lg:text-5xl font-bold text-center'>
                Research
            </h1>
            <h1 className='pt-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center'>
                Multi-Agent System (MAS)
            </h1>
            <h1 className="pt-4 font-medium text-white/80 text-center">
                Reinforcement Learning, Java
            </h1>
        </div>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            { /* Left side: award */ }
            <div className='md:p-10 p-20'>
                <iframe src="https://www.iaria.org/conferences2025/awardsINTELLI25/intelli2025_a2.pdf#toolbar=0" width="100%" height="360px" />
            </div>
            { /* text section */ }
            <div>
                <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                    I implemented multi-agent reinforcement learning system based on the Discrete Smart Surface benchmark.
                    The environment consists of a grid of independent agents that must coordinate their actions to move an object to a goal location. 
                </p>
                <div className='mt-7'>
                    { /* lab  */ }
                    <div className='flex items-center space-x-3 mb-4'>
                        <BsAt className='w-9 h-9 text-pink-300' />
                        <p className='text-xl font-bold text-gray-400'>
                            ELBICA Lab
                        </p>
                    </div>
                    { /* map of confe  */ }
                    <div className='flex items-center space-x-3 mb-4'>
                        <BsAward className='w-9 h-9 text-pink-300' />
                        <p className='text-xl font-bold text-gray-400'>
                            Intelli 2025, Lisbon Portugal
                        </p>
                    </div>
                </div>
                { /* download */ }
                <div className='flex items-center mt-8 space-x-3'>
                    <a 
                        href="https://personales.upv.es/thinkmind/dl/conferences/intelli/intelli_2025/intelli_2025_2_10_60005.pdf"
                        target="_blank" 
                        className="px-6 py-3.5 text-sm cursor-pointer rounded-lg font-bold bg-pink-500
                                    hover:bg-pink-700
                                    transition-all duration-300 text-white flex items-center space-x-2">
                        <BiDownload className="w-5 h-5" />
                            <span>View Paper</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Research;