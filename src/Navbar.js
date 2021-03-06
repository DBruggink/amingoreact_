import React, {useContext} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import AppContext from './AppContext'
import Logo from './AlphaSportBlack.png'

const Navbar= ()=>{

  const[globalState,setGlobalState]=useContext(AppContext)
  
  const logOut=()=>{
    setGlobalState(
      {
        ...globalState,
        loggedIn:false
      }
    )
  }

  const logoStyle ={
      width:'150px',
      alt: '300px'
  }
   
  
    return(
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark" >
   <Link to={'./'}>
  <a className="navbar-brand" href="#">
    <img src={Logo} style={logoStyle}/>
  
  </a>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
    <span className="navbar-toggler-icon"></span>
  </button>
  </Link>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Profile <span className="sr-only">(current)</span></a>
      </li>
      <Link to={'./register'}>
      <li className="nav-item">
        <a className="nav-link" href="#">Register<span className="sr-only">(current)</span></a>
      </li>
      </Link>
      <Link to={'./feed'}>
      <li className="nav-item">
        <a className="nav-link" href="#">Feed<span className="sr-only">(current)</span></a>
      </li>
      </Link>
      <Link to={'./about'}>
      <li className="nav-item">
        <a className="nav-link" href="/about">About Us <span className="sr-only">(current)</span></a>
      </li>
      </Link>
    </ul>
    
  </div>

  {      
   globalState.loggedIn=== false &&
  
  <Link to={'./login'}>
  <button  className='btn btn-danger' >Log In</button>
  </Link>
   }
   {
     globalState.loggedIn=== true &&
     <Link to='/'>
     <button onClick={logOut}  className='btn btn-danger' >Log Out</button>
     </Link>
   }
</nav>

    )
}

export default Navbar