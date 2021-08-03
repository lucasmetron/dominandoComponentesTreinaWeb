import React, { Component } from 'react'
import './App.css'
import MeuComponentente, { MeusComponentes } from './components/MeuComponente'

class App extends Component {
  render() {

    const dados = {
      nome: "Lucas",
      sobrenome: "Rosa",
      idade: '25'
    }

    return (

      <div>
        <MeuComponentente {...dados} /> {/* Operador spread */}
        <MeuComponentente nome="Lucas" sobrenome="Rosa" idade='25' /> {/* Spread evita isso*/}
      </div>

    );
  }
}

export default App;
