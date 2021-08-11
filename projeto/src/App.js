import React, { Component } from 'react';
import './App.css';

import { VideoService } from './services/VideoService';
import { Channel } from './services/EventsService'
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';
import VideoInline from './components/VideoInline';
import FormVideo from './components/FormVideo';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: {},
      videoContainerElement: this.inlineVideo
    }

    this.inlineVideo = React.createRef();
    this.cinemaVideo = React.createRef();

    this.selectedVideo = this.selectedVideo.bind(this)
    this.toggleCinema = this.toggleCinema.bind(this)


    { console.log(this.inlineVideo) }
  }

  async componentDidMount() {

    const videosReq = await VideoService.list();
    this.setState({ videos: videosReq })
    // this.selectedVideo(this.state.videos[0])
    Channel.on('video:select', this.selectedVideo)
    Channel.on('video:toggle-cinema', this.toggleCinema)

  }

  componentWillUnmount() {
    Channel.removeListener('video:select', this.selectedVideo);
    Channel.removeListener('video:toggle-cinema', this.toggleCinema);
  }

  toggleCinema() {
    const currentElement = this.state.videoContainerElement;
    const newContainer = currentElement === this.inlineVideo ? this.cinemaVideo : this.inlineVideo;
    console.log('cheguei')
    this.setState({
      videoContainerElement: newContainer
    })

  }

  selectedVideo(video) {
    this.setState({ selectedVideo: video })
  }



  render() {
    const { state } = this
    return (
      <div >
        <VideoPlayer video={state.selectedVideo} container={state.videoContainerElement} />

        <VideoInline>
          <div ref={this.inlineVideo}></div>
        </VideoInline>

        <VideoList videos={state.videos} />

        <VideoCinema isActive={state.videoContainerElement === this.cinemaVideo} >
          <div ref={this.cinemaVideo}></div>
        </VideoCinema>

        <FormVideo />
      </div>
    );
  }

}

export default App;
