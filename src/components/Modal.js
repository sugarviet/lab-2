import {Container, Box, TextField, Typography, Stack, Button, Modal as hehe} from '@mui/material'
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Modal({isShow, setIsShow}) {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setIsShow(!isShow)
    }
    return ( 
        <>
        {/* <Container maxWidth={false} sx={{backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: '0', left: '0', width: '100%', height: '100%'}} > */}
            
            {/* <Stack sx={{backgroundColor: 'white', position: 'absolute', top: '20%', left: '30%', width: '650px', height: '400px', borderRadius: '20px'}} direction='column'>
                <Typography variant='h2' align='center'>Form</Typography>
                <Stack sx={{alignItems:'center', display: 'flex', justifyContent: 'center'}} direction='column'>
                <form>
                <TextField label="First name" sx={{marginTop: '20px', width: '40%', marginLeft: '60px'}} variant='outlined'/>
                <TextField label="Last Name" sx={{marginTop: '20px', width: '40%', marginLeft: '5px'}} variant='outlined'/>
                <TextField label="Email" sx={{marginTop: '20px', width: '81%',  marginLeft: '60px'}} variant='outlined'/>
                <TextField label="Email" sx={{marginTop: '20px', width: '81%',  marginLeft: '60px'}} variant='outlined'/>
                <Button variant='outlined' sx={{position: 'relative', left: '40%', top: '10%'}}>Submit</Button>
                </form>
                </Stack>
        
               
            </Stack> */}
             {/* <hehe 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography variant='h2' align='center'>Form</Typography>
                <Stack sx={{alignItems:'center', display: 'flex', justifyContent: 'center'}} direction='column'>
                <form>
                <TextField label="First name" sx={{marginTop: '20px', width: '40%', marginLeft: '60px'}} variant='outlined'/>
                <TextField label="Last Name" sx={{marginTop: '20px', width: '40%', marginLeft: '5px'}} variant='outlined'/>
                <TextField label="Email" sx={{marginTop: '20px', width: '81%',  marginLeft: '60px'}} variant='outlined'/>
                <TextField label="Email" sx={{marginTop: '20px', width: '81%',  marginLeft: '60px'}} variant='outlined'/>
                <Button variant='outlined' sx={{position: 'relative', left: '40%', top: '20%', marginTop: '20px'}}>Submit</Button>
                </form>
                </Stack>
        </Box>
      </hehe>
        </Container> */}

        <hehe open={open} onClose={() => setOpen(false)}>
            <Box >
                <Typography variant='h1' sx={{color: 'red'}}>hehe</Typography>
            </Box>
        </hehe>
        </>
     );
}

export default Modal;