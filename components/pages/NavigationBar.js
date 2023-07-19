import React from 'react';

const NavigationBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-black"  style = {{backgroundColor : 'black'}}>
      
        <a className="navbar-brand" href="/"  style = {{backgroundColor : '#4600de', borderRadius:'20px'}}>STOCKRACK</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ">
              <a className="nav-link" href="/" style = {{backgroundColor : '#4600de', borderRadius:'20px',  fontColor:'white'}}>Home</a> 

            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about" style = {{backgroundColor : '#4600de', borderRadius:'20px',marginLeft:'30px' , Color:'white'}}>About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/services"  style = {{backgroundColor : '#4600de', borderRadius:'20px', marginLeft:'30px',  Color:'white'}}>Services</a>
            </li>
            <li className="nav-item active" >
              <a className="nav-link" href="/login"  style = {{backgroundColor : '#4600de', borderRadius:'20px', marginLeft:'30px', Color:'white'}}>LogOut</a>
            </li>
          </ul>
        </div>   
    </nav>
  );
};

export default NavigationBar;
