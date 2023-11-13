import React, { useState } from 'react'

const CRcase1 = () => {
    let[state,setState]=useState(false)
    let handleChange=()=>
    {
        setState(!state)
    }
    
  
    if(state==true){
        return (
            <>
            <h1>logged in as Supriya</h1>
            <button onClick={handleChange}>Click</button>
            </>
        )
    }else{
        return(
            <>
            <h1>logged in as Guest</h1>
            <button onClick={handleChange}>Click</button>
            </>
        )

    }  
}

export default CRcase1