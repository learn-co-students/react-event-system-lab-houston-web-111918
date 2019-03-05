import React, { Component } from 'react';

export class EyesOnMe extends Component {

focus = () => {
    console.log('Good!')
}

blur = () => {
    console.log('Hey! Eyes on me!')
}

handleClick =(e) => {
    this.focus()
    this.blur()
}

    render() {
        return (
            <div>
               <button onClick={this.handleClick}>Eyes on me!</button>
            </div>
        );
    }
}

export default EyesOnMe
