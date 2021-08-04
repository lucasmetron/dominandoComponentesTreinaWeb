import React, { Component } from 'react';
import Time from './Time';

export default class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(a, b) {
        this.setState((state, props) => {
            return { isOn: !state.isOn }
        })
    }

    render() {
        const { state } = this;
        return (

            <div>
                <button onClick={(event) => { this.handleClick(50, 70) }} >{state.isOn === true ? "Ligado" : "Desligado"}</button>
                {state.isOn === true ? <Time /> : 'OFF'}
            </div>


        );
    }
}