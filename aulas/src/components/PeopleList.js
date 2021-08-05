import React, { Component } from 'react';

const myList = [
    { nome: "João", idade: 23 },
    { nome: "Maria", idade: 25 },
    { nome: "Paulo", idade: 32 },
    { nome: "Bruna", idade: 20 },
];

class PeopleList extends Component {

    sayMyName(person) {
        alert(person.nome)
    }

    render() {
        return (
            <div>
                <ul>
                    <React.Fragment>
                        {myList.map((item, i) => <li onClick={this.sayMyName.bind(this, item)} key={i}>{item.nome} - {item.idade} anos</li>)}
                    </React.Fragment>
                </ul>
            </div>


        );
    }
}



export default PeopleList
