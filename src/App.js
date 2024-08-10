import React from 'react';
import Connect from './components/Connect'
import './App.css';
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';


function App() {
  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[])
 return (
  <div>
    <Connect />
  </div>
 );
   
}


export default App;


