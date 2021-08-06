import React, { Component } from 'react'
import './App.css'
import ClickList from './components/ClickList'
import ClickListItem from './components/ClickListItem'
import MeuComponentente from './components/MeuComponente'
import MyButton from './components/MyButton'
import PeopleList from './components/PeopleList'
import Time from './components/Time'



class App extends Component {
  render() {
    return (

      <div>
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
