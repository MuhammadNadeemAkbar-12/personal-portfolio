import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a
                href='https://www.linkedin.com/in/mh-nadeem/'
                target='_blank'
                rel='noopener noreferrer'><BsLinkedin/></a>
            <a
                href='https://github.com/MuhammadNadeemAkbar-12'
                target='_blank'
                rel='noopener noreferrer'><FaGithub /></a>
            <a
                href='https://dribbble.com'
                target='_blank'
                rel='noopener noreferrer'><FaDribbble /></a>
        </div>
    );
};

export default HeaderSocials;
