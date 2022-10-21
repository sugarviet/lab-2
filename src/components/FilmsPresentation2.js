import {useState} from "react";
import PopUp from "./PopUp";
import SimpleSlider2 from './SimpleSlider2';
import {Link} from 'react-router-dom';

import {Grid, Container, Typography, Card, Box} from '@mui/material'

function FilmsPresentation2({films}) {
    const [detail, setDetail] = useState({});
    const [togglePopup, setTogglePopup] = useState(false);

    return ( 
        <>
       

        <SimpleSlider2 />
          
        
        <Box className="title">
            <Typography variant="h2" sx={{borderTop: '1px solid rgb(159, 200, 75)'}} align='center'>Movies</Typography>
        </Box>
        <Grid container rowSpacing={8} columnSpacing={8} p={8}>
           {films.map((film, index) => (
             <Grid item lg={3} xs={12} md={6} key={index}>  
             <div className="card">

                <div class="card-img"sx={{borderRadius: '20px'}} style={{backgroundImage:`url(${film.img})`, backgroundSize:'cover', backgroundRepeat: 'none', padding: '10px', backgroundPosition: 'center', position: 'absolute', width: '100%', height: '100%'}}>

                </div>
                 <div className="card-content">              
                 <Typography variant="h3" sx={{fontSize:'2rem'}}>{film.title}</Typography>
                 <Typography paragraph={true} >{film.year}</Typography>
                 <p>{film.nation}</p>
                <p className="p">
                <Link to={`detail/${film.id}`}>
                    <button className="film-btn">View detail</button>
                </Link>
                </p>
                 </div>
             </div>
             
         </Grid> 
           ))}
           
           {/* {togglePopup && <PopUp detail={detail} togglePopup={togglePopup} setTogglePopup={setTogglePopup}/>} */}
           
        </Grid>
        
        </>
     );
}

export default FilmsPresentation2;