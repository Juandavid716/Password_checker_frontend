import React from 'react';
export default class Prediction extends React.Component{

render(){
    const {color, message} = this.props;
    return(<div style={{color : color}}> {message}</div>)
}
}
