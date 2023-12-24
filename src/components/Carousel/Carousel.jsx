import React, { useState, useEffect } from 'react'
import leftArrow from '../../images/Arrow Left.jpg'
import rightArrow from '../../images/Arrow Right.jpg'
import './Carousel.css'

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);

    }
    const prevslide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='container'>
            <div className="mid_section">
                <h1 > Featured Products</h1>
                <h3> Explore and discover a variety of products</h3>

            </div>
            <section className="carousel">
                <img src={leftArrow} className="left-arrow" onClick={prevslide} />
                <img src={rightArrow} className="right-arrow" onClick={nextSlide} />
                {slides.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} alt='images' className="image" />
                            )}
                        </div>
                    )
                })
                }
            </section>
        </div>
    )
}

export default Carousel