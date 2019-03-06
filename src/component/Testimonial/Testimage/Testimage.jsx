import React from "react";

const Testimage = (props) => {
     if( props === null){
         return null
     }else {
        return(
            <>
            <img alt="phone" src={props.gal.url} />
            </>
        )
     }
    
}

export default Testimage;