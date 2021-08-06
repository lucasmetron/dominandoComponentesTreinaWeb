import React, { Component } from 'react';


class ClickList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }

        this.setTotal = this.setTotal.bind(this)
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
                        <item.type handleClick={this.setTotal} index={index} key={index}> {/*o type pega o tipo do item e cria um novo componente */}
                            {item.props.children}
                        </item.type>
                    );
                })}
            </ul>


        );
    }
}


export default ClickList