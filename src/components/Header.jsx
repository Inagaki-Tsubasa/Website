import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <nav className='header-nav'>
            <ul className='header-navlist'>
                <li className='header-navitem'>
                    <Link to="/website/">HOME</Link>
                 </li>
                <li>
                    <Link to="/website/skills">SKILLS</Link>
                </li>
                <li>                      
                    <Link to="/website/question">QUESTION</Link>
                </li>
                <li>
                    <Link to="/website/like">LIKE</Link>
                </li>
            </ul>
        </nav>
        
    </header>
  )
}

export default Header