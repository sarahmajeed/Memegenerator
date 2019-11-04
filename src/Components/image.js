import React from "react"
import '../Styles/Image.scss'

function Image (props) {
    return (
        <div className="meme">
        <img src={props.randomImg} alt="Sorry for the error"/>
        <div><h1 className="top" style={props.color==="blue"?{color:"blue"}:{color:"black"}}>{props.topText}</h1></div>
        <div><h1 className="bottom" style={props.color==="blue"?{color:"blue"}:{color:"black"}}>{props.bottomText}</h1></div>
       </div>
    )
}

export default Image