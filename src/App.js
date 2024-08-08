import Home from './components/Home'
import './App.css';
import { useEffect } from 'react';
import AOS from "aos"



function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])
 return (
  <div>
    <Home />
  </div>
 );
   
}


export default App;


