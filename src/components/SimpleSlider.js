import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useState } from "react";

function SimpleSlider() {
    const [state, setState] = useState({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    });
    return ( 
        <div className="slider-content">
                <Slider {...state}>
                    <div>
                        <img className="slider-img"src={require('../assets/images/venom.jpg')}/>
                    </div>
                    <div>
                    <img className="slider-img"src={require('../assets/images/peaky_blinders.jpg')}/>
                    </div>
                    <div>
                    <img className="slider-img"src={require('../assets/images/dragon-balls.png')}/>
                    </div>
                    <div>
                    <img className="slider-img"src={require('../assets/images/stranger-things.jpg')}/>
                    </div>
                    <div>
                    <img className="slider-img"src={require('../assets/images/spider-man.jpg')}/>
                    </div>
                    <div>
                    <img className="slider-img"src={require('../assets/images/jurassic_park.jpg')}/>
                    </div>
            </Slider>
        </div>
     );
}

export default SimpleSlider;