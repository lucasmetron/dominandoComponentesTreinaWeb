import React, { Component } from 'react';

// function MeuComponentente() {
//     return (
//         <h1>Treina Web</h1>
//     );
// }


class MeuComponentente extends Component {

    render() {
        return (
            <h1>Treina Web Classe</h1>
        );
    }
}

export const MeusComponentes = {
    TreinaWeb: function () {
        return <h1>Ola Web developers</h1>
    }
}


export default MeuComponentente;