import React from 'react';
import {InputGroup, FormControl, Button} from "react-bootstrap";
export default class Input extends React.Component {
constructor(props){
    super(props);
    this.state = {
        inputValue: ""
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
    alert('A name was submitted: ' + password);
    e.preventDefault();
}

render(){
    return(
    <div className="inputBox">
        <form className="form" onSubmit={this.submitPassword}>
            <InputGroup className="mb-3">
            <FormControl
            className="form" 
           
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={this.state.inputValue} onChange={this.handleChange}
            />
            <InputGroup.Append >
            <Button variant="danger" type="submit" value="Submit"  >Comprobar</Button>
            </InputGroup.Append>
            </InputGroup>
            
           
        </form>
       
    </div>)
}


}

 