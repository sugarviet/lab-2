import {useParams} from 'react-router-dom';
import {Films} from '../share/ListOfFilms'

import {Container, Box, Grid, Button, Typography,Stack} from '@mui/material'

function MovieDetail2() {
    const userName = useParams();
    const films = Films.find(obj => {
        return obj.id == userName.id;
    });
    return ( 
        <>
        <Container maxWidth={false} className="movie-detail">       
             <Box
        component="img"
        sx={{
          width: '100%',
          height: '600px',
          marginTop: '10px',
          opacity: '0.5',
          overflowX: 'hidden'
        }}
        alt="The house from the offer."
        src={`${films.background_img}`}
      />

            <Grid container className="movie-detail-info" spacing={2}>
            <Grid item lg={4} className="movie-detail-info-poster">
                <img src={`${films.img}`} alt=""/>
                <button><i class="fa-solid fa-play"></i> Watch now</button>
            </Grid>
            <Grid item lg={8} className="movie-detail-info-description">
                <Typography variant='h2' sx={{color: 'whitesmoke'}}>{films.title}</Typography>
                <Typography>Hanh trinh den vo tan (<span>2022</span>)</Typography>
                <div className="movie-time">
                    <p>{films.duration}</p>
                </div>
                <Stack className="movie-rating" direction='row'>
                    <Box sx={{
                        width: '50px',
                        backgroundColor: '#ffc107',
                        color: 'black',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        textAlign: 'center'
                        }}>IMDB</Box>
                    <Typography variant='p' sx={{color: '#ffc107'}}>{films.rating}</Typography>
                </Stack>
                <Box >
                    <Typography paragraph={true} variant='p'>{films.description}</Typography>
                </Box>
                <Box className="movie-trailer">    
                <iframe width="1060" height="415" src={`${films.videoID}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </Box>
            </Grid>
            </Grid>
        </Container>
        </>
     );
}

export default MovieDetail2;