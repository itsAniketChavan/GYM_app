import React, { useEffect, useRef,useState } from "react";
import "../../styles/Header.css";
import logo from "../../assets/img/dumble.png";
//import { Link } from "react-scroll";

import { AiOutlineMenu } from "react-icons/ai";

const nav__links = [
  {
    Path: "#",
    display: "Home",
  },

   



  {
    Path: "#",
    display: "Schedule",
 
  },

 



  {
    Path: "#",
    display: "Classes",
  },

   



  {
    Path: "#",
    display: "Pricing",
  },
];


  
 
const Header = () => {
   
  
    

  return (
    <header className="Header">
      <div className="container">
        <div className="nav__wrapper">
          {/*Logo*/}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" srcset="" />
            </div>
            <h2>FitBody</h2>
          </div>
          {/*Navigation menu*/}

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item"> 
                  <a href={item.path}>{item.display}</a>
                  
                
                 </li>
              ))}
            </ul>
          </div>

          {/*Nav Right*/}

          <div className="nav__right">


            <button className="Register_btn">Register</button>
             

            <span className="mobile_menu">
              {" "}
              <AiOutlineMenu />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;





 