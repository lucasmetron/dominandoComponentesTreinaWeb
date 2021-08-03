import React, { Component } from 'react'
import './App.css'
import MeuComponentente, { MeusComponentes } from './components/MeuComponente'

class App extends Component {
  render() {

    const nome = 'TreinaWeb';
    const nome2 = 'Hello'
    const MeuComponenteEscolhido = MeusComponentes[nome]; {/*Forma de usar montando um componente com uma variável*/ }
    const HelloComponent = MeusComponentes[nome2];

    return (

      <div>

        <MeuComponentente />
        <MeusComponentes.TreinaWeb /> {/*Forma de usar montando um componente com um objeto*/}
        <MeusComponentes.Hello />
        <MeuComponenteEscolhido /> {/*Forma de usar montando um componente com uma variável*/}
        <HelloComponent />

      </div>

    );
  }
}

export default App;
