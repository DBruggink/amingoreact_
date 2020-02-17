import React from 'react';

const Card= (prop)=>{
    const cardStyle={
      "width": '10%',
      'alt': '20%',
      backgroundColor: 'grey'
    }
    const imgStyle={
      alignConent:'center'
    }
      return(
      <div className="card" style={cardStyle}>
      <img src={prop.image} className="card-img-top" alt="10%" />
      <div className="card-body">
        <h5 className='car-header'>{prop.title}</h5>
        <p className="card-text">{prop.text}</p>
        <a href="#" className="btn btn-primary">{prop.link}</a>
      </div>
    </div>
    ) 
  }

export default Card;