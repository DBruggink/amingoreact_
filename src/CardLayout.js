import React from 'react'

const CardLayout = (prop)=>{
    const style={
        display:'Flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '50px',
        backGround: 'white',
        textAlign:'center'

        
    
    }
    
    return(
        <div style={style}> 
        {prop.children}

        </div>
    )
}

export default CardLayout;