import React, { Component } from 'react';

export default class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true,
        }

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.setState((state, props) => {
            console.log(state)
            return { isOn: !state.isOn }
        })
        console.log(this.state.isOn)
    }

    render() {
        const { state } = this;
        return (

            <button onClick={this.handleClick} >{state.isOn === true ? "Ligado" : "Desligado"}</button>
        );
    }
}