import React, { Component } from 'react'
import './App.css'
import MeuComponentente from './components/MeuComponente'
import MyButton from './components/MyButton'
import PeopleList from './components/PeopleList'
import Time from './components/Time'

class App extends Component {
  render() {

    const dados = {
      nome: "Lucas",
      sobrenome: "Rosa",
      idade: '25'
    }

    return (

      <div>
        <PeopleList />

      </div>

    );
  }
}

export default App;
