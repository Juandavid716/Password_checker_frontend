import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Encabezado extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ""
        }
    }


render(){
    return(
    <div >
    <Navbar className="navColor">
        <Navbar.Brand href="#home">
        React Bootstrap
        </Navbar.Brand>
    </Navbar>
       
    </div>)
}


}

 