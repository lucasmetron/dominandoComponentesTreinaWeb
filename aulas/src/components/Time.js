import React, { Component } from 'react';


export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            teste: 'Lucas'
        }

        setInterval(() => {
            this.setState((state, props) => {
                return {
                    time: state.time + 1
                }
            })
        }, 1000)
    }
    render() {
        const { state } = this;
        return <div>{state.time}</div>
    }
}