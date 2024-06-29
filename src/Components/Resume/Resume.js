import React from 'react'
import './Resume.css'
import { FaChevronCircleRight } from "react-icons/fa";
const Resume = () => {
    return (
        <div id='resume' className='resume-container'>
            <h1>Resume</h1>
            <hr />

            <h2><strong>Riya Shah</strong><br />MERN STACK DEVELOPER</h2>

            <div className="summary">
                <h3>Summary</h3>
                <p>

                    Enthusiastic and detail-oriented fresher with a Bachelor of Computer
                    Applications (B.C.A) from Veer Narmad South Gujarat University.
                    Proficientin MERN Stack Development, with a strong foundation in React
                    JS,Node.js, and Express.js. Adept at using modern web technologies such
                    asHTML5, CSS, and Bootstrap, and skilled in JavaScript and MongoDB for
                    backend development. Seeking an opportunity to apply my technical skills
                    and problem-solving abilities in a dynamic and growth-oriented.
                </p>
            </div>
            <div className="summary">
                <h3>Work Experience</h3>
                <p className='special'>E-Commerce Clothing Website</p>
                <p className='mern'>Using MERN Stack</p>
                <ul>
                    <li><FaChevronCircleRight className='resume-icon' /><p>
                        Formy self-practice project, I developed a comprehensive E-commerce clothing website utilizing a MERNstack.</p>
                    </li>

                    <li><FaChevronCircleRight className='resume-icon' /><p>
                        On the front-end, I used React.js to create a dynamic and responsive userinterface.</p>
                    </li>

                    <li><FaChevronCircleRight className='resume-icon' /><p>
                        Forthe back-end, I employedNode.js and Express.js to build RESTful APIs that handled various functionalities such as userauthentication, productmanagement, and order processing.</p>
                    </li>
                    <li><FaChevronCircleRight className='resume-icon' /><p>
                        MongoDB was used as the database, with Mongoose facilitating smooth datamodeling.
                    </p>
                    </li>
                    <li><FaChevronCircleRight className='resume-icon' /><p>
                        I implemented secure userregistration and login processes using JSONWeb Token (JWT), andmanaged file uploads for
                        productimages with Multer.</p>
                    </li>
                    <li><FaChevronCircleRight className='resume-icon' /><p>
                        Additionally,the application included features for a shopping cart and ordermanagement, ensuring a seamless user</p>
                    </li>
                </ul>
            </div>
            <div className="summary">
                <h3>Education</h3>
                <p className='special'>Bachelor of Computer Applications (B.C.A)</p>
                <p>3rd Year with - 86.50% </p>
                <p>Veer Narmad South Gujarat University</p>
            </div>
            <div className="summary">
                <h3>Certifications</h3>
                <p className='special'>Full Stack Web Development Bootcamp 2024 - MERN STACK [Running]</p>
                <p>From Udemy </p>
            </div>
        </div>
    )
}

export default Resume
