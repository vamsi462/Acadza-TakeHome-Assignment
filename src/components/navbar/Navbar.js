import React from 'react'
import './Navbar.css'
import avatar from '../../assests/avatar.svg'
const Navbar = ({sidebarOpen,openSidebar}) => {
    console.log(sidebarOpen)
    return (
       <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <p>Activity</p>
         <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 12L12.9952 0.75H0.00480938L6.5 12Z" fill="#5843BE"/>
        </svg>
        <p>Tool Guide</p>
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 12L12.9952 0.75H0.00480938L6.5 12Z" fill="#5843BE"/>
        </svg>
      </div>
      <div className="navbar__right">
        <a href="/">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
    )
}

export default Navbar
