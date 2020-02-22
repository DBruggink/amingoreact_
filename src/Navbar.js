import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

const Navbar= ()=>{

  
    return(
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark" >
   <Link to={'./'}>
  <a className="navbar-brand" href="#">Alpha Sport</a>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
    <span className="navbar-toggler-icon"></span>
  </button>
  </Link>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Profile <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Events<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Feed<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    
  </div>
  <Link to={'./login'}>
  <button  className='btn btn-danger' >Log In</button>
  </Link>
</nav>

    )
}

export default Navbar