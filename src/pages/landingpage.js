import React from 'react';
import Card1 from'../Card1';
import CardLayout from '../CardLayout';
import Navbar from '../Navbar';
import Banner from '../Banner';
import RedBlueButton from '../RedBlueButton.js'
import CounterButton from '../CounterButton'
import LoadButton from '../LoadButton.js';
import Carousel from '../components/Carousel'
import Header from '../components/Header/Header'


import { makeStyles } from "@material-ui/core/styles"

import GridContainer from "../components/Grid/GridContainer";
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button'
import EmailSub from '../EmailSub'

import styles from "../assets/jss/material-kit-react/views/landingPage";


const useStyles = makeStyles(styles);


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      
     
     <EmailSub/>
    
     <Banner
        header='Alpha Sport'
        photo='https://cdn.pixabay.com/photo/2017/08/24/21/41/tartan-track-2678543_960_720.jpg'
        />
     
    
     <Carousel/>
     

    
    
     
     <center>
        <CounterButton/>
        </center>
     <center>
      <RedBlueButton/>
     </center>
     <center>
    <LoadButton/>
     </center>
      <CardLayout>
        <Card1
        image='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
        title='Profile'
        text = 'Here is the link to your profile page, register first!'
        link= 'Profile'
        />
        <Card1
        image='https://images.unsplash.com/photo-1578625155481-7bc40a6481b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        title='Event Calendar'
        text = 'Here is the link to all our events that you can join!'
        link= 'Calendar'
        
        
        />
        <Card1
        image='https://images.unsplash.com/photo-1543185377-b75671ac8741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        title='Sign up'
        text = 'Here is the link to sign up and become part of Alpha Sport!'
        link= 'Register'
        
        />
        </CardLayout>
        
     
        
        
        
        
     
        
        <Navbar/>
    </div>
  );
}

export default App;
