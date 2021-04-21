import React from 'react';
import {InputGroup, FormControl, Button} from "react-bootstrap";
import {Weak, Strong} from "./Prediction";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
export default class Input extends React.Component {
constructor(props){
    super(props);
    this.state = {
        inputValue: "", password: "", isLoading: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitPassword = this.submitPassword.bind(this);

}
handleChange(evt){
    this.setState({
        inputValue: evt.target.value
    });
}
submitPassword =(e)=>  {
    this.setState({password: "", isLoading: true});
    let password = this.state.inputValue;
    console.log(password)
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
    this.setState({isLoading: false});
    });
   
    e.preventDefault();
}

render(){
    let answer;
    let loadingDiv = ['load']

    if(this.state.isLoading){
        loadingDiv.push('Active')
    }


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
        <LoadingMask loading={this.state.isLoading} text={"loading..."} className="isLoading">
        <div className={loadingDiv.join('')} style={{ width: 100, height: 50 }}></div>
        <div  className="answerBox">
        {answer}
        </div>
        </LoadingMask>
        
    </div>
       
  
    )
}


}

 