import React from "react";
import './slidercontrol.css';

// import "./Slidecontrol.css";

const Slidecontrol = (props) => {

   

    return (
        <>
            {/* <p>{props.curI}</p> */}
            <div className="btn">
            <button onClick={props.prev} disabled={props.det.indexOf(props.desc)===0 }>Prev</button>
            <button onClick={props.next} disabled= {props.det.indexOf(props.desc)===props.det.length -1}>Next</button>
            </div>
            <div className="nextDet">
            <p>Next:</p>
            <p>{props.desc.name +1}</p>
            <p>{props.desc.role}</p>
            </div>
        </>
    )
}

export default Slidecontrol;