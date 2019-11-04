import React,{Component} from 'react'
import Form from './Form'
import Image from './image'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            allMemeImgs: [],
            randomImg:"https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
            color:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response=>response.json())
            .then(response=>{
                const {memes} = response.data
                this.setState({
                    allMemeImgs : memes
                })
            })
    }
    handleChange(event){
            const {name,value} = event.target
            this.setState({
                [name]:value
            })
    }
    handleSubmit(event){
            event.preventDefault()
            const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
            const randMemeImg = this.state.allMemeImgs[randNum].url
            this.setState({ 
                randomImg: randMemeImg 
            })
    }
    render(){
        return(
        <div>
            <Form topText={this.state.topText} bottomText={this.state.bottomText} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <Image topText={this.state.topText} bottomText={this.state.bottomText} randomImg={this.state.randomImg} color={this.state.color}/>
        </div>
        )
}
}

export default MemeGenerator