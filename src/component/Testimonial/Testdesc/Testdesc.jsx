import React from "react";
import Slidecontrol from './Slidercontrol/Slidercontrol.jsx'

import './Testdesc.css'

const Testdesc = (props) => {
     if( props === null){
         return null
     }else {
        return(
            <>
            <h1>{props.desc.name}</h1>
            <h2>{props.desc.role}</h2>
            <p>{props.desc.Testimony}</p>
            <div>
              <Slidecontrol next={props.next} prev={props.prev} curI={props.curI} det={props.det} desc={props.desc} />  
            </div>
            </>
        )
     }
    
}


export default Testdesc;