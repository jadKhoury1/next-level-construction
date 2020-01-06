import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import sliderImage1 from '../images/slider-1.jpg';
import sliderImage2 from '../images/slider-2.jpg';
import sliderImage3 from '../images/slider-3.jpg';

const Carousel = () => {

    const imageMaxHeight = '550px';
    return (
     
        <ResponsiveCarousel
            showStatus={false} showThumbs={false} autoPlay={false} stopOnHover={false} 
            infiniteLoop={true} interval={10000} transitionTime={700}
        >
            <div> 
                <img src={sliderImage1} alt="next level green building" style={{ maxHeight: imageMaxHeight }}></img>
            </div>
            <div >
                <img src={sliderImage2} alt="next level green bulding" style={{ maxHeight: imageMaxHeight }}></img>
            </div>
             <div >
                <img src={sliderImage3} alt="next level green bulding" style={{ maxHeight: imageMaxHeight }}></img>
            </div>
        </ResponsiveCarousel>
       
    );
    
};

export default Carousel;