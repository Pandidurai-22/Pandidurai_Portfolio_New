
import { useState } from 'react';
import '../App.css';
import { RxHamburgerMenu } from "react-icons/rx";
import logoImage from "../assets/logo.jpg";
import { useLocation } from 'react-router-dom';



function Header() {

  const [toggleMenu, setToggleMenu]  = useState(false)
  const location = useLocation();

  const isHome = location.pathname === '/'
  const isProject = location.pathname === '/projects'

  return (
    <div className="App">
      <header className={`flex header  justify-between px-5 py-2 items-center ${isHome? 'md:absolute':'md:relative'} `}>
        
        {/* <h1 className='font-bold suren text-4xl'></h1> */}
        <img src={logoImage}  alt='logo' />
        <nav className='hidden md:block new-one'>
        <ul className='flex px-3 gap-2'>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/skills'>Skills</a></li>
        <li><a href='/projects'>Projects</a></li>        
        <li><a href='/contact'>Contact</a></li>
        <li><a href="/Resume.pdf" className='download' download >Download CV</a></li>
        </ul>
        </nav>

      
     
        <button className='block md:hidden' onClick={()=> setToggleMenu(!toggleMenu)} ><RxHamburgerMenu /></button>
      </header>

     { toggleMenu &&
      <nav className={`block nav-small md:hidden ${isHome? 'absolute':'absolute'} ${isProject?'relative':'absolute'}`}>
        <ul className='new-nav'>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/skills'>Skills</a></li>
        <li><a href= '/projects'>Projects</a></li>
        <li><a href='/contact'>ContactMe</a></li>
        <li><a href='/Resume.pdf' download >Download CV</a></li>
        </ul>
        </nav>

     }
    </div>
  );
}

export default Header;
