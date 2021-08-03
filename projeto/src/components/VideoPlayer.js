import React, { Component } from 'react';


export default class VideoPlayer extends Component {
    render() {
        return (
            <div className='video-player'>
                <video
                    src="https://ak.picdn.net/shutterstock/videos/1010998511/preview/stock-footage-shot-of-a-fit-young-woman-exercising-with-pilates-ball-at-gym-female-athlete-doing-workout-using.mp4"
                    controls autoPlay loop
                />
                <button>[ ]</button>
            </div>
        );
    }



}