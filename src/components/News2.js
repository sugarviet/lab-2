import SimpleSlider2 from './SimpleSlider2'
import {films1, films2} from './Films'
import { useState } from 'react';
import {Typography, Container, Button, Stack, Box} from '@mui/material'




function News() {
    const [movieArray, setMovieArray] = useState(films1);
    // const classes = useStyle();

    const handleSwitch = (event, data) => {
        const hehe = data == 1 ? setMovieArray(films1) : setMovieArray(films2);
    }
   

    return ( 
        <>
        <Container maxWidth={false}>
        <Typography variant='h2' style={{color: 'rgb(159, 200, 75)', textAlign: 'center', marginTop: '10px'}}>Now showing</Typography>
        <SimpleSlider2 />
        <Box className='movie-place' sx={{overflowX: 'hidden'}}>
            <div className='movie-btn'>
                    <Stack spacing={2} direction='row'>
                <Button size='large' variant='text' onClick={event => handleSwitch(event, 1)} sx={{color: 'clicked'}}>Showing</Button>
                <Button size='large' variant='text'onClick={event => handleSwitch(event, 2)}>Comming soon</Button>

                    </Stack>
            </div>

            <Box className='movie-content'>
                {movieArray.map(movie => (
                <div className='movie'>
                    <img src={movie.img} alt=""/>
                </div>
                ))}
            </Box>

        </Box>

        </Container>
        </>
     );
}

export default News;