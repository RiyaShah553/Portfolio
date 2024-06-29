import React, { useState } from 'react';
import './Projects.css'
import w1 from '../../assets/w1.jpg'
import w2 from '../../assets/w2.jpg'
import w3 from '../../assets/w3.jpg'
import w4 from '../../assets/w4.jpg'
import w5 from '../../assets/w5.jpg'
import w6 from '../../assets/w6.jpg'


const Projects = () => {
    const images = [
        { id: 1, src: w1, category: 'app' },
        { id: 2, src: w2, category: 'book' },
        { id: 3, src: w3, category: 'app' },
        { id: 4, src: w4, category: 'product' },
        { id: 5, src: w5, category: 'product' },
        { id: 6, src: w6, category: 'book' },
    ];
    const [filteredImages, setFilteredImages] = useState(images);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleButtonClick = (category) => {
        setSelectedCategory(category);
        if (category === 'all') {
            setFilteredImages(images);
            console.log(images.src)
        } else {
            setFilteredImages(images.filter((image) => image.category === category));
        }
    };

    return (
        <div id='projects' className='project-container'>
            <h1>Projects</h1>
            <hr />
            <h2>Here are some of the projects I've worked on:</h2>
            <div className="project-btn">
                <button onClick={() => handleButtonClick('all')}> ALL</button>
                <button onClick={() => handleButtonClick('app')}> APP</button>
                <button onClick={() => handleButtonClick('product')}> PRODUCT</button>
                <button onClick={() => handleButtonClick('book')}> BOOK</button>
            </div>
            <div className='items'>
                <ul>
                    {filteredImages.map((image) => (
                        <li key={image.id}>
                            <img src={image.src} className={image.category} alt={image.src} />

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects
