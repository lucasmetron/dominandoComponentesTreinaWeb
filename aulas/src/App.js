import React, { Component } from 'react'
import './App.css'
import MeuComponentente, { MeusComponentes } from './components/MeuComponente'

class App extends Component {
  render() {

    const nome = 'TreinaWeb';
    const MeuComponenteEscolhido = MeusComponentes[nome]; {/*Forma de usar montando um componente com uma variável*/ }

    return (

      <div>

        <MeuComponentente teste='rosa' />
        <MeuComponenteEscolhido nome="Lucas" /> {/*Forma de usar montando um componente com uma variável*/}

      </div>

    );
  }
}

export default App;
