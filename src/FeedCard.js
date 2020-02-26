import React from 'react';
import Logo from './AlphaSportBlack.png'


const Card1= (prop)=>{
    const cardStyle={
      width: '1000px',
      alt: '700px',
      backgroundColor: 'grey',
      align:'center'
    }
    const imgStyle={
        width:'100px',
        height:'100px',
        marginLeft:''
    }
      return(
      <div className="card" style={cardStyle}>
      <img src={prop.image}  style={imgStyle} />
      <div className="card-body" >
        <h5 className='car-header'>{prop.title}</h5>
        <p className="card-text">{prop.text}</p>
        <a href={prop.href} className="btn btn-primary">Like</a>
      </div>
    </div>
    ) 
  }

export default Card1;