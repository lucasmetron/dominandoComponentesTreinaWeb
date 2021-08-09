import React, { Component } from 'react';
import { Channel } from '../services/EventEmitter'
class ClickList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            hasError: false,
        }

        this.setTotal = this.setTotal.bind(this)
    }

    componentDidMount() {
        Channel.on('listItem:click', this.setTotal) //inciando canal
    }

    componentWillUnmount() {
        Channel.removeListener('listItem:click', this.setTotal) //se o componente for removido ele vai remover o canal
    }

    setTotal() {
        this.setState(state => {
            return {
                total: state.total + 1
            }
        })

    }


    render() {
        return (
            <ul>
                Total : {this.state.total}
                {this.props.children.map((item, index) => {
                    return (
                        <item.type index={index} key={index}> {/*o type pega o tipo do item e cria um novo componente */}
                            {item.props.children}
                        </item.type>
                    );
                })}
            </ul>


        );
    }
}


export default ClickList