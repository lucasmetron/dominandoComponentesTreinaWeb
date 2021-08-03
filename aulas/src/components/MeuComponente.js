import React, { Component } from 'react';
class MeuComponentente extends Component {

    render() {
        { console.log(this) }
        const { props } = this

        return (
            <ul>
                <li>Nome: {props.nome}</li>
                <li>Sobrenome: {props.sobrenome}</li>
                <li>Idade: {props.idade}</li>
            </ul>
        );
    }
}


export default MeuComponentente;