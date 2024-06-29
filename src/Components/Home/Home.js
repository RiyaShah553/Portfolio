import React from 'react'
import './Home.css'
import PIC3 from '../../assets/PIC3.jpeg'
import Typical from 'react-typical'
const Home = () => {
    return (
        <div id='home' className='home-container'>
            <div className="profile-image-container">
                <div className='home-profile'>
                    <img src={PIC3} className='' alt="" />
                </div>
            </div>
            <div>
                <div className="header-content">
                    <h1>Hy! Am</h1>
                    <h2 className='fullname'>
                        Riya Shah
                    </h2>
                    <h2>
                        I'm a
                        <Typical
                            steps={[
                                ' Full Stack Developer 🚀', 2000,
                                ' Frontend Developer 🏆', 1500,
                                ' Backend Developer 🏅', 1500,
                                ' MERN Stack Developer 👩‍💻', 1500,
                            ]}
                            loop={Infinity}
                            wrapper='b' />
                    </h2>
                </div>

            </div>
        </div>
    )
}

export default Home
