import React from 'react';
import Navbar from "react-bootstrap/Navbar";

export default class NavbarItem extends React.Component {
render(){
return(<div>
   <Navbar bg="light">
    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="light">
    <Navbar.Brand>Brand text</Navbar.Brand>
  </Navbar>
  <br />
  <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
</div>
    )
}
}