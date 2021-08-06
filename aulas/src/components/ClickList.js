import React, { Component } from 'react';


class ClickList extends Component {


    render() {
        return (
            <ul>
                <div>abc</div>
                {this.props.children.map(item => {
                    return (
                        <li>
                            <item.type prop2={this.props.number} > {/*o type pega o tipo do item e cria um novo componente */}
                                {item.props.children}
                                {this.props.number}
                            </item.type>
                        </li>

                    );
                })}
            </ul>


        );
    }
}


export default ClickList