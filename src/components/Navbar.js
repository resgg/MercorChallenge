import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar-container">
  <div className="left-logo">
    <img src={process.env.PUBLIC_URL + '/pic/logo.svg'} alt="Left Logo" />
  </div>
  <nav className="navbar">
    <ul className="nav-list">
    <li><a href="/">SignIn</a></li>
        <li><a href="/">Legal</a></li>
        <li><a href="/">Licenses</a></li>
        <li><a href="/">Security</a></li>
        <li><a href="/">Careers</a></li>
        <li><a href="/">Press</a></li>
        <li><a href="/">Support</a></li>
        <li><a href="/">Status</a></li>
        <li><a href="/">Codeblog</a></li>
    </ul>
  </nav>
  <div className="right-logo">
    <img src={process.env.PUBLIC_URL + '/pic/eye button.svg'}alt="Right Logo" />
  </div>
</div>
 
  )
}

export default Navbar