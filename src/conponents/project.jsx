import React from 'react'


const pictures=[
    {src:'/images/saved1.PNG', text:'MockCBT is an online computer-based testing platform designed for students. I built the backend with Node.js and Express, using JWT for authentication and MongoDB for database management. The platform features dynamic test creation, automatic scoring, and AI integration for intelligent question suggestions based on performance.', link:'https://github.com/bloggerlucky43/newmockcbt'},
    {src:'/images/saved2.PNG', text:'Elitesubpay is a full-stack digital service platform that enables users to buy airtime, data bundles, and more. I developed the backend using Node.js, Express, and MongoDB, implementing secure user authentication, transaction logging, a wallet system, and protected API routes to handle purchases and verifications effectively.', link:'https://github.com/bloggerlucky43/elitesub'},
    {src:'/images/saved3.PNG', text:'Diuvel is a custom Telegram bot built using Node.js and the Telegram Bot API. It processes user commands in real-time, provides dynamic responses using external APIs, and was designed to automate routine tasks while offering a smooth and interactive user experience.', link:'https://github.com/bloggerlucky43/diuvel'},
    {src:'/images/saved4.PNG', text:'PUPS is another Telegram bot developed to handle specific user tasks with real-time interaction. Built with Node.js, Express, and the Telegram Bot API, it manages user commands, logs interactions to a database, and integrates seamlessly with backend logic to perform automated functions efficiently.', link:'https://github.com/bloggerlucky43/pupss' }
]

const Project=()=>{

    return(
        <>
        <div className="pro-container">
            <h1>Latest Projects</h1>
            <div className="pro-gallery">
                {pictures.map((pic,index)=>(
                    <div className="pro-items" key={index}>
                        <div className="pro-subitems">
                            <img src={pic.src} alt={pic.alt} />
                            <div className="pro-third">
                            <p>{pic.text}</p>
                                <a href={pic.link} target='_blank'><button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
                                    GitHub
                                    </button></a> 
                            </div>
                        <div className="pro-second">
                        <p>{pic.text}</p>
                                <a href={pic.link} target='_blank'><button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
                                    GitHub
                                    </button></a>
                            </div>
                           
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Project