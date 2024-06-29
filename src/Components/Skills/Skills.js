import React from 'react'
import './Skills.css'
const Skills = () => {
    return (
        <div id="skills" className='skills-container'>
            <h1>Skills</h1>
            <hr />
            <p>
                I have a strong foundation in the following skills:
            </p>
            <div className="main-skill">
                <p>HTML</p>
                <div class="container">
                    <div class="skills html">95%</div>

                </div>

                <p>CSS</p>
                <div class="container">
                    <div class="skills css">80%</div>
                </div>

                <p>JavaScript</p>
                <div class="container">
                    <div class="skills js">75%</div>
                </div>

                <p>React JS</p>
                <div class="container">
                    <div class="skills react">90%</div>
                </div>
                <p>Redux</p>
                <div class="container">
                    <div class="skills redux">50%</div>
                </div>

                <p>Node JS</p>
                <div class="container">
                    <div class="skills node">85%</div>
                </div>

                <p>Express JS</p>
                <div class="container">
                    <div class="skills express">70%</div>
                </div>

                <p>MongoDB</p>
                <div class="container">
                    <div class="skills mongo">90%</div>
                </div>


            </div>
        </div>
    )
}

export default Skills
