import React from 'react';


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
            <label>
              Contraseña: <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
            </label>
            
            <input type="submit" value="Submit" />
           
        </form>
       
    </div>)
}


}

 