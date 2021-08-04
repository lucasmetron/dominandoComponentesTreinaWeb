import React, { Component } from 'react';

export default class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teste: 5,
        }

        this.sayHello = this.sayHello.bind(this)
    }


    sayHello(event) {
        event.preventDefault();
        alert('clicado')
    }

    render() {
        return (
            <button onClick={this.sayHello} > teste</button>
        );
    }
}