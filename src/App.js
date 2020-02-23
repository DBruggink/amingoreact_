import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/landingpage'
import Login from './pages/login'
import Navbar from './Navbar'
import Registration from './pages/registration'
import About from './pages/About'
import './App.css'




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
    <Route path='/register' component={Registration} />
    <Route path='/about' component={About} />

    <Route path='/about' component={About} />

  </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
