import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/landingpage'
import Login from './pages/login'
import Navbar from './Navbar'
import Registration from './pages/registration'




function App() {
  
  const[globalState,setGlobalState]=useState(
    {
      loggedIn: false
    }
  )

  return (
<BrowserRouter>
    <div className='App'>
  <Navbar/>
  <Switch>
   
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/registration' component={Registration} />


  </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
