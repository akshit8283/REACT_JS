import './App.css';                             
import Head from './Head';      
import Slider from './Slider';    
import Footer from './Footer';   
import About from './About';      
import { Route,Routes } from 'react-router-dom';   
function App() {   
  return (            
    <>             
    <Head />    
    <Routes>    
      <Route path="/About" element={<About/>} />      
    </Routes>   
    <Slider/>    
    <Footer/>     
   </>                    
  )      
}
export default App;                 
