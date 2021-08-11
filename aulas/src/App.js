import React, { Component } from 'react'
import './App.css'
import ClickList from './components/ClickList'
import ClickListItem from './components/ClickListItem'
import MeuComponentente from './components/MeuComponente'
import MyButton from './components/MyButton'
import MyVideo from './components/MyVideo'
import PeopleList from './components/PeopleList'
import Time from './components/Time'

import { MyContext } from './services/Mycontext'

class App extends Component {

  constructor(props) {
    super(props);

    this.item1 = React.createRef();
    this.item2 = React.createRef();

    this.state = {
      selectedItem: this.item2,
      username: 'Lucas'
    }

    this.toggleItem = this.toggleItem.bind(this)
  }

  toggleItem() {
    this.setState(({ selectedItem }) => {
      return {
        selectedItem: (selectedItem === this.item1 ? this.item2 : this.item1)
      }
    })
  }

  render() {
    return (

      <div>

        <div>
          <ul>
            <li ref={this.item1}></li>
            <li ref={this.item2}></li>
          </ul>
          {console.log(this.state.selectedItem)}
          <Time container={this.state.selectedItem.current} /> {/*o valor da referencia é um objeto, e temos que passar o current*/}

          <button onClick={this.toggleItem}>Toggle</button>

        </div>

        <MyContext.Provider value={this.state}>

          <MyVideo src='https://storage.coverr.co/videos/01rZ72OIlq02ZVbbsZrddweEM9NOkA1zAv/download?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI4Mjc4NzczfQ.UBFwT_-zlQaEBe6QI4cExAVhn-yLYILy5u3FSZuqrIo&filename=Woman posing in front of blue wall' />
          <ClickList >
            <ClickListItem></ClickListItem>
            <ClickListItem></ClickListItem>
            <ClickListItem></ClickListItem>
          </ClickList>

        </MyContext.Provider>


      </div>

    );
  }
}

export default App;
