import React from 'react'

function NavBar() {
  return (
    
    <nav className="container">
    <div className="logo">
      <img src="/logo.png" alt="logo" />
      
    </div>
    
    <ul>
      <li>Home</li>
      <li >Features</li>
      <li >Blog</li>
      <li >About</li>
      <li ><b>Contact</b></li>
    </ul>

    <button>Login/Register</button>
  </nav>
  )
}

export default NavBar
