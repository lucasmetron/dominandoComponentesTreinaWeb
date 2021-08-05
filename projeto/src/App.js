import React, { Component } from 'react';
import './App.css';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';
import { VideoService } from './services/VideoService';
import FormVideo from './components/FormVideo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: {},
    }

    this.selectedVideo = this.selectedVideo.bind(this)
  }

  async componentDidMount() {

    const videosReq = await VideoService.list();
    this.setState({ videos: videosReq })

    this.selectedVideo(this.state.videos[0])

  }

  selectedVideo(video) {
    this.setState({ selectedVideo: video })
  }

  render() {
    const { state } = this
    return (
      <div >
        <VideoPlayer video={state.selectedVideo} />
        <VideoList videos={state.videos} selectedVideo={ } />
        <VideoCinema isActive={false} />
        <FormVideo />
      </div>
    );
  }

}

export default App;
