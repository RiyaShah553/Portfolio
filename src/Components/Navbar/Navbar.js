import React from 'react'
import './Navbar.css'
import profile from '../../assets/profile.jpeg'
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoDocument } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { BsList } from "react-icons/bs";

const Navbar = ({ toggle, setToggle }) => {

    return (
        <div id="navbar">
            <button className='navtoggle'
                onClick={() => setToggle(!toggle)}>
                <BsList />
            </button>
            {
                toggle && (
                    <nav className="navbar-container">

                        <div className="image-container">
                            <img src={profile} alt="" />
                            <p className='intro'>Riya Shah</p>
                            <hr />
                        </div>
                        <div className='nav-links-container'>
                            <ul className="nav-links">
                                <li>
                                    <a href="#home">
                                        <FaHome className='icons' />
                                        Home</a>
                                </li>
                                <li>
                                    <a href="#about"><FaUserAlt className='icons' />About</a>
                                </li>
                                <li>
                                    <a href="#skills"><GiSkills className='icons' />Skills</a>
                                </li>
                                <li>
                                    <a href="#resume"><IoDocument className='icons' />Resume</a>
                                </li>
                                <li>
                                    <a href="#projects"><AiFillProject className='icons' />Projects</a>
                                </li>
                                <li>
                                    <a href="#contact"><IoIosMail className='icons' />Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                )
            }
        </div >
    )
}

export default Navbar
