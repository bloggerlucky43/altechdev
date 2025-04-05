import React, { useRef } from "react";
import TypingEffect from "./conponents/typingeffect";
import ParagraphEffect from "./conponents/paragrapheffect";
import AboutMe from "./conponents/aboutme";
import Skills from "./conponents/skills";
import Education from "./conponents/education";
import Experience from "./conponents/experience";
import Contact from "./conponents/contact";
import {motion } from "framer-motion";
import Project from "./conponents/project";


const VideoBackGround=()=>{
    const skillsRef=useRef(null)
    const educationRef=useRef(null)
    const aboutRef=useRef(null)
    const experienceRef=useRef(null)
    const contactRef=useRef(null)
    const projectRef=useRef(null)

    const scrollToSection=(ref)=>{
        ref.current?.scrollIntoView({behavior:'smooth'})
    };



    return(
        <div className="video-container">
           <video className="video-background"  autoPlay loop muted>
                <source src="/videos/240414_small.mp4" type="video/mp4" />
                Your browser does not support video tag
            </video>

            <div className="content">
                <div className="content-nav">
                    <h1><span id="logo">A</span>ltechdev</h1>
                    <div className="content-list">
                        <ul>
                            <li onClick={() => scrollToSection(aboutRef)}><a href="#">About</a></li>
                            <li onClick={() => scrollToSection(skillsRef)}><a href="#">Skills</a></li>
                            <li onClick={() => scrollToSection(experienceRef)}><a href="#">Experience</a></li>
                            <li onClick={()=> scrollToSection(projectRef)}><a href="#">Projects</a></li>
                            <li onClick={() => scrollToSection(educationRef)}><a href="#">Education</a></li>
                            <li onClick={() => scrollToSection(contactRef)}><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section-container">
                <motion.div 
                className="section"
                initial={{ opacity: 0, y: 50 }} // Fade-in effect
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="image-div">
                    <img src="/images/myprofile.jpg" alt="My Profile" loading="lazy"/>
                    </div>
                    <h1>Hi, I'm Feranmi!</h1>
                    <h3>
                        <TypingEffect text='Full Stack Developer' speed={100} />
                    </h3>
                    <p><ParagraphEffect text='Welcome to my corner of the web! I’m a dedicated web developer with expertise in HTML, CSS, JavaScript, React, and more. I bring creativity and technical skill to every project,
                     ensuring a seamless and engaging user experience.'  speed={50}/></p>
                    <a href="/images/latestresume.pdf" download='My Resume' className="resume"><button id="resume">Download Resume</button></a>
                </motion.div>

                    <motion.div className="profile-img"
                    initial={{ opacity: 0, scale: 0.8 }} // Scale effect
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <img src="/images/myprofile.jpg" alt="My Profile" loading="lazy"/>
                    </motion.div>

                    

                </div>

                <div className="about-link" ref={aboutRef}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                >
                        <AboutMe />
                    </div>
                    
                <div className="skill-link" ref={skillsRef}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                >
                        <Skills />
                    </div>
                    <div className="ex-link" ref={experienceRef}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                    >
                        <Experience />
                    </div>
                    <div className="pro-link" ref={projectRef}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                    >
                        <Project />
                    </div>
                <div className="edu-link" ref={educationRef}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1}}
                >
                        <Education />
                    </div>
                
                <div className="contact-link" 
                ref={contactRef}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
                >
                        <Contact />
                    </div>
        </div>
    )
}
export default VideoBackGround