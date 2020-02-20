import React from 'react'

const Banner=(prop)=> {
    const bannerStyle={
        backgroundImage: `url(${prop.photo})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        maxHeight: '170px',
        marginTop:'-32px'
        
    }
    const headerStyle={
        textAlign:'center',
        color:'white',
        marginTop:'-18px'
    }
    

    return(
      <div className="jumbotron jumbotron-fluid"
        style={bannerStyle}>
            
    <h1 style={headerStyle}>{prop.header}</h1>
    <center>
    <button type="button" className="btn btn-primary" >Register</button>
    </center>
        </div>
    )
}

export default Banner