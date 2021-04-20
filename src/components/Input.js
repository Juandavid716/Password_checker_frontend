import React from 'react';
import {InputGroup, FormControl, Button, ResponsiveEmbed} from "react-bootstrap";
import {Weak, Strong} from "./Prediction"
export default class Input extends React.Component {
constructor(props){
    super(props);
    this.state = {
        inputValue: "", password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitPassword = this.submitPassword.bind(this);

}
handleChange(evt){
    this.setState({
        inputValue: evt.target.value
    });
}
submitPassword(e){
    let password = this.state.inputValue;
    const URL_API = "https://apipasswordchecker.herokuapp.com/api/" + password;
    fetch(URL_API).then(response => response.json())
    .then((data) => {
      let numberPass = data[0].num_it
      console.log();
      if(numberPass< 147573952589676410000) {
        this.setState({password:"weak"})
    } else {
        this.setState({password:"strong"})
    }
    });
   
    e.preventDefault();
}

render(){
    let answer;
    if(this.state.password === "weak" ){
        answer = <Weak/>
    } else if (this.state.password==="strong") {
        answer = <Strong/>
    } else {
        answer = ""
    }
    return(
    <div className="passwordBox" >
        
        <div className="inputBox" >
        <form className="form" onSubmit={this.submitPassword}>
            <InputGroup className="mb-3">
            <FormControl
            className="form" 
           
            placeholder="Digitar contraseña"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={this.state.inputValue} onChange={this.handleChange}
            />
            <InputGroup.Append >
            <Button variant="danger" type="submit" value="Submit"  >Comprobar</Button>
            </InputGroup.Append>
            </InputGroup>
            
           
        </form>
        
        </div>
        <div className="answerBox">
        {answer}
        </div>
    </div>
       
  
    )
}


}

 