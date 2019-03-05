import React, { Component } from 'react';

export class Keypad extends Component {

    password = () => {
        console.log('Entering Password...')
    }

    render() {
        return (
            <div>
                 <input type="password" onKeyUp={this.password} />
            </div>
        );
    }
}

export default Keypad
