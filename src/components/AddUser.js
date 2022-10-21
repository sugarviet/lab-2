import {Box, Card, Stack, Grid, TextField, Button} from '@mui/material'
import {useState} from 'react'
import {addUser} from '../features/Users'
import {useDispatch} from 'react-redux';
function AddUser() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    return (
     <Stack direction='column' sx={{marginTop: '20px', backgroundColor: 'white', height: '400px'}}>
        
        <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} sx={{marginTop: '30px'}}/>
        <TextField label='Username' value={username} onChange={(e) => setUsername(e.target.value)} sx={{marginTop: '30px'}}/>

        <Button variant='contained' onClick={()=> {
              dispatch(addUser({id: 0, name: name, username: username}));
              }}
         sx={{marginTop: '30px'}}>Submit</Button>
    </Stack> 
    );
}

export default AddUser;