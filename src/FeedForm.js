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
        marginLeft:'-1010px'
    
    }

    const selectStyle ={
        marginBottom:'25px'
    }

    
    
    return(
        <div className="container feed-form" style={formStyle}>
            <form>
                <div className="form-group">
                    <img src={prop.image} style={imgStyle}/>
                    
                    <textarea className="form-control"></textarea>
                </div>
                <label for="country">Emirate</label>
                <br/>
                <select id="country" name="country" style={selectStyle}>
            <option value="australia">Dubai</option>
            <option value="canada">Abu Dhabi</option>
            <option value="usa">Sharjah</option>
            <option value="usa">Ajman</option>
            <option value="usa">Fujairah</option>
            <option value="usa">Ras al Khaimah</option>
            </select>
            <br/>
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