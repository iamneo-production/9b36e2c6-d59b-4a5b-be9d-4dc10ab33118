
import React from 'react';
import '../../App.css'
import icon from '../../assets/images/user.png'

const SideBar= () => {
  return (
    
    <div className="sidebar" style = {{borderColor:'white', backgroundColor: 'black', paddingBottom:'20px'}}>
    <div className="main-content">
            <h1  style = {{color:'white',backgroundColor : '#4600de', borderRadius:'10px'}}><center><img src = {icon} alt = 'icon'style ={{width: '50px'}}></img>Dashboard</center></h1>
          </div>
         
      <ul>
        <li>
          <a href="/profile" style = {{color:'black',backgroundColor : 'white', borderRadius:'20px', paddingLeft:'100px', paddingRight:'100px' , padding:'10px', width:'10px', paddingBottom:'10px'}}>User Profile</a>
          
        </li>
        <li>
          <a href="/view" style = {{color:'black',backgroundColor : 'white', borderRadius:'20px', paddingLeft:'100px', paddingRight:'100px' , padding:'10px'}}>View Stock </a>
        
        </li>
        <li>
          <a href="/stocktable" style = {{color:'black',backgroundColor : 'white', borderRadius:'20px', paddingLeft:'100px', paddingRight:'100px' , padding:'10px'}}>Add Stock</a>
       
        </li>
        <li>
          <a href="/" style = {{color:'black',backgroundColor : 'white', borderRadius:'20px', paddingLeft:'100px', paddingRight:'80px' , padding:'10px'}}>Billing</a>
         
        </li>
      </ul>
    </div>
  );
}

export default SideBar;