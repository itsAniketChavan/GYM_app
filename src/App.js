 
import { useState, useEffect , Component} from 'react';
import Aos from 'aos'

import './App.css';
import Header from "./Components/Header/Header";
import Hero from "./Components/UI/Hero";
import Exercise from "./Components/UI/Exercise";
import Sur from './Components/UI/Sur';
import Pricing from './Components/UI/Pricing';
import Testimonials from './Components/UI/Testimonials';
import Footer from './Components/UI/Footer';
import Register from './Components/UI/Register';


 
 
function App() {

  useEffect(()=>
  {

    Aos.init();
    

  },[])

//   const [showRegistration, setShowRegistration] = useState(false);
// 
//   const handleRegistrationClick = () => {
//     setShowRegistration(true);
//   };

 
  
  return (
     
     <>
      
     <Header /> 
     <Hero/>
     <Exercise />
    <Sur/>
    <Pricing/>
    
    <Testimonials/>
    <Footer/>
    

     
    {/* <div>
      {showRegistration ? (
        <Register />  
      ) : (
        <div>
          <Header /> 
          <button className = "Register" onClick={handleRegistrationClick}>Register</button>
     <Hero/>
     <Exercise />
    <Sur/>
    <Pricing/>
    
    <Testimonials/>
    <Footer/>
           
        </div>
      )}
    </div> */}


 


     </>
     
  );
}



export default App;
