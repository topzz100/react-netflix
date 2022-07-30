import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  const [isScroll, setIscroll] = useState(false)
  window.onscroll = () => {
    setIscroll(window.pageYOffset === 0 ? false : true)
   }
   console.log(isScroll)
  return (
    <div className={isScroll? 'navbar scroll' : 'navbar'}>
      <div className="left">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/3HCWZMP7PFGY3OJJPFHIX5O2VI.png" alt="" />
        <div className="nav-menu">
          <Link to={'/'}>
            <span>Homepage</span>
          </Link>
          <Link to={'/series'}>
            <span>Series</span>
          </Link>
          <Link to={'/movies'}>
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>        
        </div>
      </div>
      <div className="right">
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span>
          KID
        </span>
        <span>
          <i className="fa-solid fa-bell"></i>
        </span>
        <span>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        </span>
        <div className="options">
          <span>
            <i className="fa-solid fa-caret-down"></i>
          </span>
          <div className="drop-down">
            <span>
              Settings
            </span>
            <span>
              Log Out
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar