import React from 'react';
import logo from "../imgs/logogithub.png";

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ""
        }
    }


render(){
    return(
    <div className="footer black" >
        <a href="https://github.com/Juandavid716/API_Password_checker">
           
        <img alt="github logo" src={logo} style={{ width: 50, height: 50 }}/> 
        <p style ={{margin: "5px"}}>Repositorio en github</p>
        </a>
    </div>)
}


}

 