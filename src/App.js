import React, { Component } from "react";
import drone3 from "./video/drone 4-3.mp4";
import mouth2 from "./video/mouth2.mp4";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      drone: drone3,
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    /* it's the same as :
        const monsters = this.state.monsters
        const searchField = this.state.searchField */
    const filteredMonsters = monsters.filter(
      (monster) =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      /* includes -> checks wheter or not the string value we pass inside
      of our includes is actually in the name that's being called on*/
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1>The Tech Nation</h1>
          <button onClick={() => this.setState({ drone: mouth2 })}>
            Enter
          </button>
        </header>
        <video src={this.state.drone} autoPlay muted loop className="drone4" />
        <div>
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
          />
        </div>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
