import React from "react";

const images=[
    { src:'/images/html-removebg-preview.png', alt:'html5', text:'HTML5'},
    { src:'/images/css3-removebg-preview.png', alt:'css3', text:'CSS'},
    { src:'/images/js-removebg-preview.png', alt:'Javascript', text:'JavaScript'},
    { src:'/images/react-removebg-preview.png', alt:'react', text:'React'},
    { src:'/images/tail-removebg-preview.png', alt:'tail', text:'TailWind'},
    { src:'/images/fire-removebg-preview.png', alt:'html5', text:'FireBase'},
    { src:'/images/node-removebg-preview.png', alt:'html5', text:'Node JS'},
    { src:'/images/express-removebg-preview.png', alt:'html5', text:'Express JS'},
    { src:'/images/post-removebg-preview.png', alt:'html5', text:'PostgreSQL'},
    { src:'/images/redux-removebg-preview.png', alt:'html5', text:'Redux'},
    { src:'/images/expo-removebg-preview.png', alt:'html5', text:'Expo Go'},
    { src:'/images/react-removebg-preview.png', alt:'react', text:'React Native'},
]

const Skills=()=>{
    return(
        <>
        <div className="skill-container">
            <h1>My Skills</h1>
            <div className="gallery">
                {images.map((img,index)=>(
                    <div className="gallery-items" key={index}>
                        <div className="gallery-subitems">
                        <img src={img.src} alt={img.alt}/>
                        </div>
                        <p>{img.text}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Skills;