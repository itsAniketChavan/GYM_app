import React, {useEffect, useRef} from 'react'
import '../../styles/Header.css'
import logo from '../../assets/img/dumble.png'
 
 

import {AiOutlineMenu} from 'react-icons/ai';

const nav__links = [
    {
        Path:'#',
        display:'Home',

    },
    {
        Path:'#Exercise' ,
        display:'Schedule',
        
    },
    {
        Path:'#',
        display:'Classes',
        
    },
    {
        Path:'#',
        display:'Pricing',
        
    }
]

const Header = () => {
    const HeaderRef  = useRef(null)
    const HeaderFunc = ()=>{

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop >80){

            HeaderRef.current.classList.add('sticky__header');

        }
        else{
            HeaderRef.current.classList.remove('sticky__header');

        }
    };

    useEffect(() =>{

        window.addEventListener('scroll', HeaderFunc);


        return ()=> window.addEventListener('scroll', HeaderFunc);
         
    },[]);


  return (
     <header className="Header" ref={HeaderRef}>
        

         <div className="container">
            <div className="nav__wrapper">

                {/*Logo*/}
                <div className="logo">

                    <div className="logo__img"><img src={logo} alt="" srcset="" /></div>
                    <h2>FitBody</h2>
                </div>
                {/*Navigation menu*/}

                    <div className="navigation">
                        <ul className="menu" >
                            {
                                nav__links.map(item =>(
                                    <li  className="nav__item"> <a href={item.path}>
                                        {item.display}</a></li>
                                ))
                            }

                        </ul>

                        
                    </div>

                    {/*Nav Right*/}

                    <div className="nav__right">

                        <button className="Register_btn">Register</button>
                         
                        <span className="mobile_menu">  <AiOutlineMenu/> 
                        
                        </span>
                    </div>
            </div>

         </div>
     </header>
  )
}

export default Header
