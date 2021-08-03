import React, { Component } from 'react';
class MeuComponentente extends Component {

    render() {
        { console.log(this) }
        const { props } = this

        return (
            <h1>Treina Web Classe {props.teste} er</h1>
        );
    }
}

export const MeusComponentes = {
    TreinaWeb: function (props) {
        return <h1>Olá {props.nome}!</h1>
    },

    Hello: () => {
        return <h1>Hello Wolrd</h1>
    }
}


export default MeuComponentente;