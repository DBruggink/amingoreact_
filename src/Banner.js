import React from 'react'

const Banner=(prop)=> {
    const bannerStyle={
        backgroundImage: `url(${prop.photo})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        minHeight: '300px',
        opacity:'30%'
    }
    const headerStyle={
        textAlign:'center',
        color:'white',
        opacity: '100%'


    }


    return(
      <div className="jumbotron jumbotron-fluid"
        style={bannerStyle}>
            
    <h1 style={headerStyle}>{prop.header}</h1>

        </div>
    )
}

export default Banner