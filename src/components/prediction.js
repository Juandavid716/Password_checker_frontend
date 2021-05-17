import React from 'react';
export default class Prediction extends React.Component{

render(){
    const {color, message, completeMessage} = this.props;
    return(<div style={{color : color, textAlign: 'center'}}> {message}<p>{completeMessage}</p></div>)
}
}
