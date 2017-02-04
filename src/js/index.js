import React from 'react';
import ReactDOM from 'react-dom';

const app = document.getElementById("application");

export default class Ejemplo extends React.Component{
  render(){
    return(<div><h1>Ejemplo</h1></div>);
  }
}

ReactDOM.render(<Ejemplo />, app);
