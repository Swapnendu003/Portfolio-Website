import React from 'react';
import './Hero.css';
import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee";
import { ImLinkedin } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const Hero = () => {
    return (
        <>
            <div className='container'>
                <div className='description'>
                    <p className='welcome'>Hello welcome to my Portfolio</p>
                    <p className='name'>Hi I am, </p>
                    <div className='profile-desc'>
                        <TypeAnimation
                            sequence={[

                                'Swapnendu Banerjee',
                                1000,
                                'a Full Stack Developer',
                                1000,
                                'a Community Builder',
                                1000,
                                'the co-founder of NoobCode',
                                1000,
                                'a MLSA @ Beta Level',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                    <p className='desc2'>Trying to explore, learn, and

                        innovate...
                    </p>
                    <div className="buttonclass">
                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Download CV</button>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                GitHub
                            </span>
                        </button>
                    </div>

                </div>
                <div className="profile-img">
                    <img src="images/profile.png" alt="" />
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/swapnendu-banerjee-36ba06219/" target="_blank" rel="noreferrer">
                            <ImLinkedin className="linkedin" />
                        </a>
                        <a href="https://www.instagram.com/swapno_banerjee/" target="_blank" rel="noreferrer">
                            <FaInstagramSquare className="instagram" />
                        </a>
                        <a href="https://discord.com/users/swapnendu" target="_blank" rel="noreferrer">
                            <SiDiscord className="discord" />
                        </a>
                        
                        
                    </div>
                </div>
            </div>
            <Marquee className='slider'>
                <img src="/images/react.svg.png" alt="" />
                <img src="/images/express.png" alt="" />
                <img src="/images/node.png" alt="" />
                <img src="/images/mongo.png" alt="" />
                <img src="/images/firebase.png" alt="" />
                <img src="/images/figma.png" alt="" />
                <img src="/images/postman.png" alt="" />
                <img src="/images/mongoose.png" alt="" />
                <img src="/images/azure.png" alt="" />
            </Marquee>
        </>

    );
}

export default Hero;
