import React, { Component } from 'react'
import './App.css'
import ClickList from './components/ClickList'
import ClickListItem from './components/ClickListItem'
import MeuComponentente from './components/MeuComponente'
import MyButton from './components/MyButton'
import MyVideo from './components/MyVideo'
import PeopleList from './components/PeopleList'
import Time from './components/Time'



class App extends Component {
  render() {
    return (

      <div>
        <MyVideo src='https://storage.coverr.co/videos/01rZ72OIlq02ZVbbsZrddweEM9NOkA1zAv/download?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI4Mjc4NzczfQ.UBFwT_-zlQaEBe6QI4cExAVhn-yLYILy5u3FSZuqrIo&filename=Woman posing in front of blue wall' />
        <ClickList >
          <ClickListItem></ClickListItem>
          <ClickListItem></ClickListItem>
          <ClickListItem></ClickListItem>
        </ClickList>
      </div>

    );
  }
}

export default App;
