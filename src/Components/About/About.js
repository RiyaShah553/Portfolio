import React from 'react'
import './About.css'
import pic from '../../assets/pic.png'
import { FaGreaterThan } from "react-icons/fa";
const About = () => {
    return (
        <div id='about' className='about-container'>
            <h1>
                About
            </h1>
            <hr />
            <div className='about-content'>
                <p>Hi, I'm <strong>Riya Shah</strong>, a passionate web developer
                    with a keen interest in building scalable, efficient, and user-friendly
                    applications. I'm a self-taught programmer with a strong foundation in
                    HTML, CSS, JavaScript, and React. I'm always eager to learn new technologies and stay up-to-date with the latest trends in the industry.
                </p>
                <img src={pic} alt="" />
            </div>
            <div className='about-info-content'>
                <h2>Web Developer</h2>
                <p>
                    I'm a skilled web developer with a strong understanding of front-end development, responsive design, and user experience. I'm proficient in HTML, CSS, JavaScript, and React, and I'm
                    always looking to expand my skillset.
                </p>
                <div className="info-detail-container">
                    <div className="info-detail">
                        <ul>
                            <li><FaGreaterThan className='about-icons' /><strong>Birthday : </strong>28 Sep 2003</li>
                            <li><FaGreaterThan className='about-icons' /><strong>Website : </strong>www.example.com</li>
                            <li><FaGreaterThan className='about-icons' /><strong>Phone : </strong>+91 99787 77764</li>
                            <li><FaGreaterThan className='about-icons' /><strong>City : </strong>Surat, India</li>
                        </ul>
                    </div>
                    <div className="info-detail">
                        <ul>
                            <li><FaGreaterThan className='about-icons' /><strong>Age : </strong>20</li>
                            <li><FaGreaterThan className='about-icons' /><strong>Degree : </strong>Bachelors (BCA)</li>
                            <li><FaGreaterThan className='about-icons' /><strong>Email : </strong>shahriya553@gmail.com</li>
                            <li><FaGreaterThan className='about-icons' /><strong>Hobbies : </strong>Sketching, Embroidary</li>
                        </ul>
                    </div>
                </div>
                <p>
                    I'm a quick learner, a team player, and a creative problem solver. I'm always
                    looking for new opportunities to grow and learn as a developer.
                </p>
            </div>
        </div>
    )
}

export default About
