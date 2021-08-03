import React, { Component } from 'react'
import './App.css'
import MeuComponentente, { MeusComponentes } from './components/MeuComponente'
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

        <Time />
        <MeuComponentente {...dados} />

      </div>

    );
  }
}

export default App;
