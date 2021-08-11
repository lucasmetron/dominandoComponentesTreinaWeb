import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import { Channel } from '../services/EventsService';
export default class VideoPlayer extends Component {
    constructor(props) {
        super(props);


        this.videoElement = React.createRef();

        this.currentTime = 0;

        this.toggleCienema = this.toggleCienema.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onPlay = this.onPlay.bind(this);
    }

    toggleCienema() {
        Channel.emit('video:toggle-cinema')
        this.onStop();
    }

    onPlay() {
        this.videoElement.current.currentTime = this.currentTime
    }

    onStop() {
        this.currentTime = this.videoElement.current.currentTime;
    }

    componentDidUpdate(prevProps) {
        if (this.props.video.url !== prevProps.video.url) {
            this.currentTime = 0;
        }
    }

    render() {

        const { container, video } = this.props
        console.log(this.props)
        if (!video.url) {
            return '';
        } else if (!container) {
            return 'carregando';
        } else {


            const element = (
                <div className='video-player'>
                    <video
                        src={video.url}
                        controls autoPlay loop
                        ref={this.videoElement}
                        onPlay={this.onPlay}
                        onPause={this.onStop}
                    />
                    <button onClick={this.toggleCienema}>[ ]</button>
                </div>
            );

            return ReactDOM.createPortal(element, container)
        }

    }



}