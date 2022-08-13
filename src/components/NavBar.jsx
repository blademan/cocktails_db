import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default function NavBar() {
 return (
  <nav className="shadow-md">
   <div className="bg-white flex justify-between mx-auto items-center w-[85vw] h-20">
    <Link to="/">
     <img className="w-[12rem]" src={logo} alt="Cocktail Logo" />
    </Link>

    <ul className="flex space-x-6 text-lg ">
     <li>
      <Link to="/">Home</Link>
     </li>
     <li>
      <Link to="/about">About</Link>
     </li>
    </ul>
   </div>
  </nav>
 );
}
