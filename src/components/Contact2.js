import {Typography, Grid, Container, Box, Stack, Button, TextField, Modal, InputLabel, Select, MenuItem} from '@mui/material'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Modal from './Modal'

const buttonSX = {
    backgroundColor: "white",
    height: '50px',
    width: '200px',
    borderRadius: '20px',
    transitions: '0.5s',
    "&:hover":{
        backgroundColor: 'white',
       
    },

}

function Contact2() {
  const [isShow, setIsShow] = useState(false);
  const [age, setAge] = useState('');
  const notify = () => {
    toast.success('🦄 Thank you <3', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    setIsShow(false);
  }

    const handleToggleModal = () => {
        setIsShow(true);
    }
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return ( 
       <>
       <Grid container  className="contact-container">
            <Grid item lg={6} className="content-left">
                <Typography variant='h1'>Contact Us</Typography>
            </Grid>
            <Grid item lg={6}>
                <Box className="image-right">
                    <img src={require('../assets/images/contact-background-img.jpg')} alt=""/>
                </Box>
            </Grid>

            
       </Grid>

                {/* Contact Profile */}
        <Stack direction='row' className='contact-info'>
                <Box className="contact-sale">
                    <div className='contact-sale-image'>
                        <img src={require('../assets/images/contact-1.jpg')} alt=""/>
                    </div>
                    <div className='contact-sale-content"'>
                        <Typography variant='h2'>Talk to a member of out Sales team</Typography>
                        <Typography paragraph={true}>Loremnly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem lishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>

                        <Button sx={buttonSX} onClick={handleToggleModal} className='contact-sale-button'>Contact Sales</Button>
                    </div>
                </Box>
                {/* --------------------------------------------------- */}
                <Box className="contact-support">
                <div className='contact-support-image'>
                        <img src={require('../assets/images/contact.jpg')} alt=""/>
                    </div>
                    <div className='contact-support-content'>
                        <Typography variant='h2'>Product and account support</Typography>
                        <Typography paragraph={true}>Lorem Ipsum960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishineMaker eMaker eMaker g software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        
                        <Button onClick={handleToggleModal} variant='outlined' sx={buttonSX} className='contact-sale-button'>Contact Product</Button>
                    </div>
                </Box>
            </Stack>

            {/* {isShow && <Modal isShow={isShow} setIsShow={setIsShow}/>} */}
            <Modal open={isShow} onClose={() => setIsShow(false)}>
                 <Stack sx={{backgroundColor: 'white', position: 'absolute', top: '20%', left: '30%', width: '650px', height: '500px', borderRadius: '20px'}} direction='column'>
                <Typography variant='h2' align='center' sx={{fontSize: '70px', color:'rgb(159, 200, 75)'}}>Information</Typography>
                <Stack sx={{alignItems:'center', display: 'flex', justifyContent: 'center'}} direction='column'>
                <form className='form'>
                <TextField label="First name" sx={{marginTop: '20px', width: '40%', marginLeft: '60px'}} variant='outlined'/>
                <TextField label="Last Name" sx={{marginTop: '20px', width: '40%', marginLeft: '5px'}} variant='outlined'/>
                <InputLabel id="demo-simple-select-label" sx={{ marginLeft: '60px'}}>Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        sx={{display: 'block', width: '510px', marginLeft: '60px'}}
                    >
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                        <MenuItem value={30}>Other</MenuItem>
                    </Select>
                <TextField label="Email" sx={{marginTop: '20px', width: '81%',  marginLeft: '60px'}} variant='outlined'/>
                <TextField label="Content" sx={{marginTop: '20px', width: '81%',  marginLeft: '60px'}} variant='outlined'/>
                <Button variant='outlined' sx={{position: 'relative', left: '40%', top: '10%'}} onClick={notify}>Submit</Button>
                </form>
                </Stack>
            </Stack>
            </Modal>
            {/* Toast */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
       </>
     );
}

export default Contact2;