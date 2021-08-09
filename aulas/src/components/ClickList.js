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
        this.restart = this.restart.bind(this)
    }

    componentDidMount() {
        Channel.on('listItem:click', this.setTotal)
    }

    componentWillUnmount() {
        Channel.removeListener('listItem:click', this.setTotal)
    }

    componentDidCatch(error) { //Executado caso o houver um erro 
        this.setState({
            hasError: true
        })
    }

    restart() {
        this.setState({
            total: 0,
            hasError: false
        })
    }

    setTotal() {
        this.setState(state => {
            return {
                total: state.total + 1
            }
        })

    }


    render() {
        const { state } = this
        if (state.hasError) {
            return <button onClick={this.restart}>Restart</button>
        }

        return (
            <ul>
                Total : {state.total}
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