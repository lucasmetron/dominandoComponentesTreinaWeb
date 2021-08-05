import React, { Component } from 'react';


class ClickList extends Component {


    render() {
        return (
            <ul>
                <div>abc</div>
                {this.props.children.map(item => {
                    return <li>{item}</li>
                })}
            </ul>


        );
    }
}


export default ClickList