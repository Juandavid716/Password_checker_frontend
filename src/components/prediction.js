import React from 'react';
export const Weak = class Weak extends React.Component{

render(){
    return(<div style={{color : "#f01e07"}}> La contraseña es muy debil </div>)
}
}
export const Strong = class Strong extends React.Component {
    render(){
        return(<div style={{color : "#20e655"}}> La contraseña es muy fuerte </div>)
    }
}