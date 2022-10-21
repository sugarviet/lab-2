
import {Grid, Stack, Card, Avatar, Box, Typography, TextField, Button} from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../features/Users';


function Users() {
    const dispatch = useDispatch();
    const userList = useSelector((state)=> state.users.value);  
    const [newUsername,setNewUsername] = useState('');

    console.log(userList);


    return ( 
        <Stack direction='column' sx={{marginTop: '20px', backgroundColor: 'white'}}>
            {userList.map((user, index) => (
            <Card id={index}>
                <Grid container p={3} spacing={6}>
                    <Grid item lg={1}>
                        <Avatar sx={{ bgcolor: deepOrange[500]}}>V</Avatar>
                    </Grid>
                    <Grid item lg={2}>
                        <Box>
                            <Typography variant='h6'>{user.name}</Typography>
                            <Typography variant='h6'>{user.username}</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={5}>
                        <TextField label='Type new user name' sx={{width: '400px'}} onChange={(e)=>setNewUsername(e.target.value)}/>
                    </Grid>
                    <Grid item lg={2}>
                        <Button variant='contained' sx={{marginLeft: '20px'}} onClick={()=>{dispatch(updateUser({id: user.id, username: newUsername}));
    }}
>UPDATE</Button>
                    </Grid>
                    <Grid item lg={2}>
                        <DeleteIcon onClick={()=> {
                        dispatch(deleteUser({id: user.id}));
                        }}
                    />
                    </Grid>
                </Grid>              
                
            </Card>
            ))}
            {/* <Card>
                <Grid container p={3} spacing={6}>
                    <Grid item lg={1}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>V</Avatar>
                    </Grid>
                    <Grid item lg={2}>
                        <Box>
                            <Typography variant='h6'>viet</Typography>
                            <Typography variant='h6'>viet dang</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={5}>
                        <TextField label='Type new user name' sx={{width: '400px'}}/>
                    </Grid>
                    <Grid item lg={2}>
                        <Button variant='contained' sx={{marginLeft: '20px'}}>UPDATE</Button>
                    </Grid>
                    <Grid item lg={2}>
                        <DeleteIcon/>
                    </Grid>
                </Grid>              
                
            </Card>
            <Card>
                <Grid container p={3} spacing={6}>
                    <Grid item lg={1}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>V</Avatar>
                    </Grid>
                    <Grid item lg={2}>
                        <Box>
                            <Typography variant='h6'>viet</Typography>
                            <Typography variant='h6'>viet dang</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={5}>
                        <TextField label='Type new user name' sx={{width: '400px'}}/>
                    </Grid>
                    <Grid item lg={2}>
                        <Button variant='contained' sx={{marginLeft: '20px'}}>UPDATE</Button>
                    </Grid>
                    <Grid item lg={2}>
                        <DeleteIcon/>
                    </Grid>
                </Grid>              
                
            </Card> */}
        </Stack>
     );
}

export default Users;