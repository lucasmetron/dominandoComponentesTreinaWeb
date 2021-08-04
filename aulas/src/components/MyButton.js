import React, { Component } from 'react';

export default class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true,
        }

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(a, b) {
        console.log(a, b)
        this.setState((state, props) => {
            console.log(props)
            return { isOn: !state.isOn }
        })
        console.log(this.state.isOn)
    }

    render() {
        const { state } = this;
        return (

            <button onClick={(event) => { this.handleClick(50, 70) }} >{state.isOn === true ? "Ligado" : "Desligado"}</button>
        );
    }
}