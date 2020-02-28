import React, {useState, useContext} from 'react'
import Logo from './AlphaSportBlack.png'
import AppContext from './AppContext'

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

const FeedForm= (prop)=>{

    let fullname;
    let description;
    let emirate;
    let likes;
    
    
    
    let image

    const [state, setState] = useState(
        {saved: false}
    )

    const sendFeed = () => {
        // Fetch request goes
        fetch('http://localhost:3010/user/register', 
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                fullname: fullname.value,
                description: description.value,
                emirate: emirate.value,
                
                
                likes: likes.value,
                image: image.value
            })
        })
        .then(response =>setState({...state, saved: true}))
    }
    

    

    
    
    return(
        <div className="container feed-form" style={formStyle}>
            <form>
                <div className="form-group">
                    <img src={prop.image} style={imgStyle}/>
                    
                    <textarea className="form-control" ref={(elem)=>description = elem}></textarea>
                </div>
                <label for="country">Emirate</label>
                <br/>
                <select id="country" name="country" style={selectStyle} ref={(elem)=>emirate = elem}>
            <option value="australia">Dubai</option>
            <option value="canada">Abu Dhabi</option>
            <option value="usa">Sharjah</option>
            <option value="usa">Ajman</option>
            <option value="usa">Fujairah</option>
            <option value="usa">Ras al Khaimah</option>
            </select>
            <br/>
                <button style={buttonStyle} onClick={sendFeed}
                    type="submit" 
                    className="btn btn-danger">
                        Post
                </button>
              
            </form>
        </div>


    )


}

export default FeedForm