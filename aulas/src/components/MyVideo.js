import React, { Component } from 'react';
import { MyContext } from '../services/Mycontext';

export default class MyVideo extends Component {

    static contextType = MyContext;

    constructor(props) {
        super(props);
        this.state = {

        }

        this.myVideo = React.createRef(); //Criando ref
        this.start = this.start.bind(this)
    }

    start() {

        this.myVideo.current.play();

    }

    render() {

        return (
            <div>
                {this.context.username}

                <video ref={this.myVideo} width="500" src={this.props.src} /> {/*Setando a ref*/}
                <button onClick={this.start}>Play</button>
            </div>
        );

    }
}