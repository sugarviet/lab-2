
import {Box, Container, Grid, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer2() {
    return ( 
        <>
        <footer>
            <Box bgcolor="primary">
                <Container maxWidth='lg'>
                    <Grid container spacing={8}>
                        <Grid item lg={4}>
                            <Typography variant='h4' sx={{fontSize: '2.5rem'}}>Service</Typography>
                            <Box>Web design</Box>
                            <Box>Development</Box>
                            <Box>Hoisting design</Box>
                        </Grid>
                        <Grid item lg={4}>
                        <Typography variant='h4' sx={{fontSize: '2.5rem'}}>About</Typography>
                        <Box>Team</Box>
                        <Box>Company</Box>
                        <Box>Legacy</Box>
                        </Grid>
                        <Grid item lg={4}>
                        <Typography variant='h4' sx={{fontSize: '2.5rem'}}>Carrers</Typography>
                        <Box>Job opening</Box>
                        <Box>Carrers success</Box>
                        <Box>Benefits</Box>
                        </Grid>
                        <Grid item lg={12}>
                            <InstagramIcon fontSize='large' sx={{marginRight: '10px'}}/>
                            <FacebookIcon fontSize='large' sx={{marginRight: '10px'}}/>
                            <TwitterIcon fontSize='large'/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
             
        </footer>
        </>
     );
}

export default Footer2;