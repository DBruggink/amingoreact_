import React from 'react';
import Logo from './AlphaSportBlack.png'


const FeedCard= (prop)=>{
    const cardStyle={
      width: '1000px',
      alt: '700px',
      backgroundColor: 'grey',
      align:'center',
      marginLeft:'-480px'
    }
    const imgStyle={
        width:'100px',
        height:'100px',
        
    }
      return(
      <div className="card" style={cardStyle}>
      <img src={prop.image}  style={imgStyle} />
      <div className="card-body" >
        <h5 className='car-header'>{prop.comments}</h5>
        <p className="card-text">{prop.description}</p>
        <p className="card-text">{prop.hashtags}</p>
          <label for="country">Country</label>
            <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            </select>
        <br/>

      
<button className="btn btn-primary">Like</button>

      </div>
    </div>
    ) 
  }

export default FeedCard;