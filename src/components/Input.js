import React from 'react';
import {InputGroup, FormControl, Button, Modal} from "react-bootstrap";
import Prediction from "./Prediction";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
export default class Input extends React.Component {
constructor(props){
    super(props);
    this.state = {
        inputValue: "", password: "", isLoading: false, modalComponent: false, message: ""
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
    this.setState({password: "", isLoading: true, modalComponent: false, message: ""});
    let password = this.state.inputValue;
    
    if(password.length=== 0 ){
        this.setState({modalComponent: true, message: "Debe digitar una contraseña", isLoading: false})
        
    } else if (password.length < 6) {
        this.setState({modalComponent: true, message: "La contraseña no puede tener menos de 6 carácteres", isLoading: false })
    }
    else {
        const URL_API = "https://apipasswordchecker.herokuapp.com/api/" + password;
        fetch(URL_API).then(response => response.json())
        .then((data) => {
          let message = data[0].num_it
          let rank = data[0].range;
          console.log(rank);
          this.setState({password: message, rank: rank})
          this.setState({isLoading: false});
        });    
    }
    
   
   
    e.preventDefault();
}



closeModal = ()=> {
this.setState({modalComponent: false})
}

render(){
    let answer, info;
    let loadingDiv = ['load']

    if(this.state.isLoading){
        loadingDiv.push('Active')
    }

   
    if(this.state.rank === "1" ){
        answer = <Prediction color="#fa1302" message={this.state.password}/>
    } else if (this.state.rank === "2" ) {
        answer = <Prediction color="#d65147" message={this.state.password}/>
    } else if (this.state.rank === "3") {
        answer = <Prediction color="#e4f218" message={this.state.password}/>
    } else if (this.state.rank === "4") {
        answer = <Prediction color="#89e851" message={this.state.password}/>
    } else {
        answer = <Prediction color="#2d7303" message={this.state.password}/>
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
             {info}
             <Modal show={this.state.modalComponent} onHide={()=> {this.closeModal()}}>
              <Modal.Header closeButton>
                <Modal.Title>Error:</Modal.Title>
              </Modal.Header>
              <Modal.Body>{this.state.message}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={()=> {this.closeModal()}}>
                  Cerrar
                </Button>
             
              </Modal.Footer>
            </Modal>
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

 