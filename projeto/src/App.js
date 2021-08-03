import React, { Component } from 'react';
import './App.css';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

class App extends Component {
  render() {
    return (
      <div >
        <VideoPlayer />
        <VideoList />

      </div>
    );
  }

}

export default App;
