import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useState } from "react";

import {Container, Card, Box} from '@mui/material'

function SimpleSlider2() {
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
        <Container maxWidth={false} maxHeight={false} style={{position: 'relative', marginTop: '40px', width: '100%'}}>
            <Box sx={{height: '500px', overflow: 'hidden'}}>
                <Slider {...state} className='slider' >
                    <Box sx={{background: 'transparent'}}>
                        <img className="slider-img"src={require('../assets/images/venom.jpg')}/>
                    </Box>
                    <Box sx={{background: 'transparent', height: '500px'}}>
                    <img className="slider-img"src={require('../assets/images/peaky_blinders.jpg')}/>
                    </Box>
                    <Box sx={{background: 'transparent'}}>
                    <img className="slider-img"src={require('../assets/images/dragon-balls.png')}/>
                    </Box>
                    <Box sx={{background: 'transparent'}}>
                    <img className="slider-img"src={require('../assets/images/stranger-things.jpg')}/>
                    </Box>
                    <Box sx={{background: 'transparent'}}>
                    <img className="slider-img"src={require('../assets/images/spider-man.jpg')}/>
                    </Box>
                    <Box sx={{background: 'transparent'}}>
                    <img className="slider-img"src={require('../assets/images/jurassic_park.jpg')}/>
                    </Box>
            </Slider>
            </Box>
        </Container>
     );
}

export default SimpleSlider2;