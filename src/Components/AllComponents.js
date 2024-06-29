import React from 'react'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Skills from './Skills/Skills'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const AllComponents = ({ toggle, setToggle }) => {

    return (
        <div>
            <Home toggle={toggle} setToggle={setToggle} />
            <About />
            <Skills />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default AllComponents
