import React, { Component } from 'react'
import './App.css'
import ClickList from './components/ClickList'
import MeuComponentente from './components/MeuComponente'
import MyButton from './components/MyButton'
import PeopleList from './components/PeopleList'
import Time from './components/Time'

class App extends Component {
  render() {
    return (

      <div>
        <ClickList >
          <h1>Qualquer Coisa</h1>
          <div>Olá</div>
        </ClickList>
      </div>

    );
  }
}

export default App;
