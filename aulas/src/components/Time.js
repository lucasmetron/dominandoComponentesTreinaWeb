import React, { Component } from 'react';

export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            teste: 'Lucas'
        }


    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((state, props) => {
                console.log(this.state.time)
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
        const { state } = this;
        return <div>{state.time}</div>
    }
}