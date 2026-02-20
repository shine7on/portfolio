import React from 'react';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { BsEnvelopeHeart } from 'react-icons/bs';
import { FaFacebook, FaFacebookF, FaGift, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { FaGithub, FaGithubAlt } from 'react-icons/fa6';


const Contact = () => {
    return (
    <div className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2
        gap-10 items-center'>
            { /* text section */ }
            <div>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
                    Contact Me
                </h1>
                <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                    Reach out to me today!
                </p>
                <div className='mt-7'>
                    { /* phone num */ }
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiPhone className='w-9 h-9 text-pink-300' />
                        <p className='text-xl font-bold text-gray-400'>
                            XXX-XXX-XXXX
                        </p>
                    </div>
                    { /* emaili */ }
                    <div className='flex items-center space-x-3 mb-4'>
                        <BsEnvelopeHeart className='w-9 h-9 text-pink-300' />
                        <p className='text-xl font-bold text-gray-400'>
                            hello@example.com
                        </p>
                    </div>
                    { /* phone num 
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiMap className='w-9 h-9 text-cyan-300' />
                        <p className='text-xl font-bold text-gray-400'>
                            Iowa, USA
                        </p>
                    </div>
                    */ }
                </div>
                { /* social icon */ }
                <div className='flex items-center mt-8 space-x-3'>
                    <div className='w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center
                    cursor-pointer flex-col hover:bg-pink-700 transition-all duration-300'>
                        <FaLinkedin className='text-white w-6 h-6' />
                    </div>
                    <div className='w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center
                    cursor-pointer flex-col hover:bg-pink-700 transition-all duration-300'>
                        <FaGithub className='text-white w-6 h-6' />
                    </div>
                </div>
            </div>
            { /* form */ }
            <div className='md:p-10 p-5 bg-gray-500/20 rounded-lg'>
                <input 
                    type="text" 
                    placeholder='Name' 
                    className='px-4 py-3.5 bg-[#363659] text-white
                    outline-none rounded-md w-full placeholder:text-white/70' 
                />
                <input 
                    type="email" 
                    placeholder='Email Address' 
                    className='px-4 py-3.5 mt-6 bg-[#363659] text-white
                    outline-none rounded-md w-full placeholder:text-white/70' 
                />
                <textarea 
                    placeholder='Your Message' 
                    className='px-4 py-3.5 mt-6 bg-[#363659] text-white
                    outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]' 
                />
                <button className='mt-8 px-12 py-4 bg-pink-500 hover:bg-pink-700 transition-all
                duration-300 cursor-pointer text-white rounded-full'>
                    Send Message
                </button>
            </div>
        </div>
    </div>
    );
};

export default Contact;