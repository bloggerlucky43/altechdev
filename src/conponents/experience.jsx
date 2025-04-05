import React from "react";
import ParagraphEffect from "./paragrapheffect";

const Experience=()=>{
    return(
        <>
        <div className="ex-container">
            <h1>My Experience</h1>
            <div className="ex-section">
                <div className="ex-text">
                    <h2><ParagraphEffect text="Full Stack Developer Intern" speed={100}/></h2>
                    <p><ParagraphEffect text="Softrays IT | March 2024- August 2024 (6 months)" speed={100} /> </p>
                    <ul>
                        <li><ParagraphEffect text="Converted Figma designs into responsive web pages using ReactJs and TailwindCSS" speed={100} /></li>
                        <li><ParagraphEffect text="Integrated RESTful APIs to dynamically fetch and update data across multiple pages"  speed={100}/></li>
                        <li><ParagraphEffect text="Delivered responsive,high quality designs on time,meeting perfomance and 
                            accessibility standards" speed={90} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}


export default Experience;