import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';

import Main from './components/Main';
import SimpleSlider from './components/SimpleSlider';
import useSavedData from './components/useSavedData';
import { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Contact2 from './components/Contact2';
import About from './components/About';
import About2 from './components/About2';
import News from './components/News';
import News2 from './components/News2';
import MovieDetail from './components/MovieDetail';
import MovieDetail2 from './components/MovieDetail2';
import Navigation2 from './components/Navigation2';
import AddUser from './components/AddUser';
import Users from './components/Users';

import {Box, Grid} from '@mui/material'

function App() {
  const [state, setState] = useSavedData('dark');

  const getData = (data) => {
    setState(data);
  }
  return (
    <div className="App" style={{backgroundColor: state.backgroundColor, color: state.color}}>
       <Navigation2 getToggle={getData}/>
        {/* <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/contact' element={<Contact2/>}/>
          <Route path='/about' element={<About2/>}/>
          <Route path='/news' element={<News2/>}/>
          <Route path='/detail/:id' element={<MovieDetail2/>}/>
          <Route/>
        </Routes> */}
        <Grid container spacing={6} p={4}>
            <Grid item lg={4}>
                <AddUser/>
            </Grid>
            <Grid item lg={8}>
                <Users/>
            </Grid>
        </Grid>

        
        {/* <Main /> */}
       <Footer2/> 
    </div>
  );
}

export default App;
