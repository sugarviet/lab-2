import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Main from './components/Main';
import SimpleSlider from './components/SimpleSlider';
import useSavedData from './components/useSavedData';
import { useState } from 'react';

function App() {
  const [state, setState] = useSavedData('dark');

  const getData = (data) => {
    console.log(data);
    setState(data);
  }
  return (
    <div className="App" style={{backgroundColor: state.backgroundColor, color: state.color}}>
       <Navigation getToggle={getData}/>
       <SimpleSlider />
        <Main />
       <Footer/> 
    </div>
  );
}

export default App;
