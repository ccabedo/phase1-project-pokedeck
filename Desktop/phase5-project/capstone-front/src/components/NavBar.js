import React from 'react';
import { Link } from "react-router-dom";


function NavBar(){

    return(
<div className="navbar bg-base-100">

<div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       
        <li><nav><Link to="/">Home</Link></nav></li>
        <li><nav><Link to="/About">About</Link></nav></li>
      
      </ul>
    </div>

  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">LuxStory</a>
  </div>

  <div className="dropdown">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       
        <li><nav><Link to="/">Home</Link></nav></li>
        <li><nav><Link to="/login">Login</Link></nav></li>
        <li><nav><Link to="/signup">Sign Up</Link></nav></li>
      
      </ul>


  </div>
</div>
    )
}

export default NavBar;