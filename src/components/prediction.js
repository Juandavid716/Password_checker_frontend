import React from 'react';
export const Weak = class Weak extends React.Component{

render(){
    return(<div className=""> La contraseña es muy debil </div>)
}
}
export const Strong = class Strong extends React.Component {
    render(){
        return(<div className=""> La contraseña es muy fuerte </div>)
    }
}