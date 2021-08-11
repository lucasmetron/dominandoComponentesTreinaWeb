import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        }


    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((state, props) => {
                return {
                    time: state.time + 1
                }
            })
        }, 1000)

    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }



    render() {
        const { state, props } = this;
        const element = <div>{state.time}</div>

        return props.container ? ReactDOM.createPortal(element, props.container) : 'Carregando'; //1 o que iremos renderizar e 2 onde iremos renderizar
    }
}