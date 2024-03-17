import React from 'react';
import './About.css'
import { useState } from 'react';
import ButtonGroup from '../ButtonGroup';
import MainSkills from '../MainSkills';
const About = () => {
    const [activeButton, setActiveButton] = useState(null);

    const buttons = [
        { name: 'mainSkills', label: 'Main Skills', className: 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' },
        { name: 'achievement', label: 'Achievement', className: 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' },
        { name: 'education', label: 'Education', className: 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' },
    ];

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (

        <div className="about">
            <div className='container'>

                <div className="image">
                    <img src="/images/about.jpeg" alt="albar" />
                </div>
                <div className="desc">
                    <p className='me'>About Me</p>
                    <h1>Enthusiastic Learner and Innovater</h1>
                    <p>Currently I am pursuing B.Tech at RCC Institute of Information Technology in Computer Science and Engineering. I am very much fond of learning the skills that will help me to sustain in this fast growing technological world.</p>
                    <ButtonGroup buttons={buttons} handleButtonClick={handleButtonClick} />
                    {activeButton === 'mainSkills' && <MainSkills />}
                    {activeButton === 'achievement' && <div>Achievement Content</div>}
                    {activeButton === 'education' && <div>Education Content</div>}
                </div>

            </div>

        </div>

    );
}

export default About;
