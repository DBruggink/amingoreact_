import React from 'react'
import Logo from './AlphaSportBlack.png'


const FeedForm= (prop)=>{
    const formStyle={
        backgroundColor:'grey',
        marginBottom:'100px'

    }
    
    const buttonStyle={
        marginBottom:'25px'
    }

    const imgStyle={
        width:'100px',
        height:'100px',
        marginLeft:'-700px'
    
    }

    
    
    return(
        <div className="container feed-form" style={formStyle}>
            <form>
                <div className="form-group">
                    <img src={prop.profilePicture} style={imgStyle}/>
                    
                    <textarea className="form-control"></textarea>
                </div>
                <button style={buttonStyle}
                    type="submit" 
                    className="btn btn-danger">
                        Post
                </button>
            </form>
        </div>


    )


}

export default FeedForm