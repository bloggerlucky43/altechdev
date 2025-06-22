import React from "react";
import ParagraphEffect from "./paragrapheffect";

const Experience = () => {
  return (
    <>
      <div className="ex-container">
        <h1>My Experience</h1>

        {/* GSTee */}
        <div className="ex-section">
          <div className="ex-text">
            <h2>
              <ParagraphEffect
                text="Backend Developer - GSTee Project"
                speed={100}
              />
            </h2>
            <p>
              <ParagraphEffect
                text="Backend Team | April 2025 - Present"
                speed={100}
              />
            </p>
            <ul>
              <li>
                <ParagraphEffect
                  text="Built and maintained secure REST APIs using Express.js and Sequelize ORM"
                  speed={100}
                />
              </li>
              <li>
                <ParagraphEffect
                  text="Designed relational database schemas for quiz, user, and result modules"
                  speed={100}
                />
              </li>
              <li>
                <ParagraphEffect
                  text="Implemented JWT authentication and role-based access control for users and admins"
                  speed={90}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Chainova */}
        <div className="ex-section">
          <div className="ex-text">
            <h2>
              <ParagraphEffect
                text="Full Stack Web3 Developer – Chainova"
                speed={100}
              />
            </h2>
            <p>
              <ParagraphEffect
                text="Personal Project | August 2023"
                speed={100}
              />
            </p>
            <ul>
              <li>
                <ParagraphEffect
                  text="Developed a Web3 reward platform using React.js, Node.js, and PostgreSQL"
                  speed={100}
                />
              </li>
              <li>
                <ParagraphEffect
                  text="Integrated Telegram Web Apps and user data capture via bot + backend sync"
                  speed={100}
                />
              </li>
              <li>
                <ParagraphEffect
                  text="Built referral and task-based systems with tokenized reward logic and countdown timers"
                  speed={90}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* MockCbt */}
        <div className="ex-section">
          <div className="ex-text">
            <h2>
              <ParagraphEffect text="Backend Developer - MockCBT" speed={100} />
            </h2>
            <p>
              <ParagraphEffect
                text="Team Project | March 2024 - May 2024"
                speed={100}
              />
            </p>
            <ul>
              <li>
                <ParagraphEffect
                  text="Built exam logic and scoring engine using Express.js and Node.js"
                  speed={100}
                />
              </li>
              <li>
                <ParagraphEffect
                  text="Created endpoints for student registration, login, and exam history tracking"
                  speed={100}
                />
              </li>
              <li>
                <ParagraphEffect
                  text="Handled database design and API documentation for seamless frontend integration"
                  speed={90}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* DepeaceAcademy School Portal */}
        <div className="ex-section">
          <div className="ex-text">
            <h2>
              <ParagraphEffect
                text="Full Stack Developer '-' DepeaceAcademy School Portal"
                speed={100}
              />
            </h2>
            <p>
              <ParagraphEffect text="Solo Project | April 2025" speed={100} />
            </p>
            <ul>
              <li>
                <ParagraphEffect
                  text="Developed a school management portal using Next.js and Express.js"
                  speed={100}
                />
              </li>
              <li>
                <ParagraphEffect
                  text="Implemented JWT authentication, role-based access, and email verification"
                  speed={100}
                />
              </li>
              <li>
                <ParagraphEffect
                  text="Designed protected student/admin dashboards with live academic data"
                  speed={90}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Elitesubpay */}
        <div className="ex-section">
          <div className="ex-text">
            <h2>
              <ParagraphEffect
                text="Full Stack Developer – Elitesubpay"
                speed={100}
              />
            </h2>
            <p>
              <ParagraphEffect
                text="Freelance Project | January 2024 – March 2024"
                speed={100}
              />
            </p>
            <ul>
              <li>
                <ParagraphEffect
                  text="Built a subscription-based platform using React.js, Node.js, and MongoDB"
                  speed={100}
                />
              </li>
              <li>
                <ParagraphEffect
                  text="Handled user authentication, subscription logic, and admin transaction management"
                  speed={100}
                />
              </li>
              <li>
                <ParagraphEffect
                  text="Integrated payment gateway and built responsive user-facing interfaces"
                  speed={90}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
