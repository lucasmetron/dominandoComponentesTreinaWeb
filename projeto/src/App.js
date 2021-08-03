import React, { Component } from 'react';
import './App.css';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: {
        img: 'https://ak.picdn.net/shutterstock/videos/1010998511/thumb/1.jpg',
        name: 'shutterstock',
        url: 'https://ak.picdn.net/shutterstock/videos/1010998511/preview/stock-footage-shot-of-a-fit-young-woman-exercising-with-pilates-ball-at-gym-female-athlete-doing-workout-using.mp4'
      },
    }
  }

  render() {
    const { state } = this
    return (
      <div >
        <VideoPlayer video={state.selectedVideo} />
        <VideoList videos={state.videos} />
        <VideoCinema isActive={false} />
      </div>
    );
  }

}

export default App;
