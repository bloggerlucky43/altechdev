import React from "react";
import ParagraphEffect from "./paragrapheffect";


const AboutMe=()=>{
    
    return(
        <>
        <div className="about-container">
            <h1>About Me</h1>
            <img src="/images/myprofile.jpg" alt="aboutpic" className="about-profile" loading="lazy"/>
            <div className="about-content">
                    <img src="/images/myprofile.jpg" alt="aboutpic" className="about-img" loading="lazy"/>
                <div className="about-text">
                    <p>
                   <ParagraphEffect text=" I'm Feranmi, a passionate Full Stack Developer skilled in React, 
                   Node.js, and database management, with expertise in building hybrid mobile apps using React Native and Expo Go.
                    I create seamless, user-centric web and mobile applications, focusing on functionality, performance, and clean code. 
                    Always eager to learn and innovate, I thrive on turning ideas into reality. Let’s build something great together! "
                     speed={100}
                    />
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default AboutMe;