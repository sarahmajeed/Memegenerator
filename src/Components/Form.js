import React from "react"
import '../Styles/Form.scss'

function Form(props){
    return(
        <div id="center">
             <form className="meme-form" onSubmit={props.handleSubmit}>
                <div>
                <input 
                    type="text" 
                    value={props.topText} 
                    name="topText" 
                    onChange={props.handleChange} 
                    placeholder="Top text.."
                />
                </div>
                <div>
                <input 
                    type="text" 
                    value={props.bottomText} 
                    name="bottomText" 
                    onChange={props.handleChange} 
                    placeholder=" Bottom text.."
                />
                </div>
                <div><button className="btn">Generate a Meme!</button></div>
              </form>
        </div>
    )
}

export default Form;