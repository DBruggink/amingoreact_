import React, { useState, useContext } from 'react';
import AppContext from './AppContext'
import CardLayout from './CardLayout';
import FeedCard from './FeedCard.js';

const LoadFeedButton = () => {
    //Global State
    const[globalState,setGlobalState]=useContext(AppContext)
    //Local State
    const [state, setState] = useState(
        { feed: [] }
    )

    const buttonStyle={
        marginTop:'-100px'
    }

    const loadFeed = () => {
        // Fetch request goes
        fetch('http://localhost:3010/feed/all')
        .then(response => response.json())
        .then(json=> {
            setState(
                {
                    ...state,
                    feed: json.results
                }
            )
        })
        
    }

    if(globalState.loggedIn  === false){
        return(
            <div style={buttonStyle}>
                You need to be logged in.
            </div>
        )
    }

    else if(state.feed.length === 0) {
        return (
            <button onClick={loadFeed} style={buttonStyle}>Load Feed</button>
        )
    } else {
        return (

            <CardLayout>
                {
               state.feed.map(
                    (item)=>
                    <FeedCard 
                        title={``}
                        image={item.image}
                        description={item.description}
                        buttonLabel="View Post"
                    />
                )
                }
           </CardLayout>

        )
    }
}

export default LoadFeedButton;