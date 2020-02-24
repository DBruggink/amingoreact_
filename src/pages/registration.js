import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'


const Registration=()=>{
 
  const regStyle={
   
      width: '450px',
      margin: 'auto',
      background: '#ffffff',
      boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
      padding: '40px 55px 45px 55px',
      borderRadius: '15px',
      transition: 'all .3s',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
       textAlign: 'left'
    }

  

  return (



    <div className="register" style={regStyle}>
        <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <Link to='/login'>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
                </Link>
            </form>

    </div>
      );
}

export default Registration;