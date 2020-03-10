import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Pokemons from "./Pokemons";

class App extends React.Component {
  render() {
    const imageLogo =
      "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg";

    return (
      <div className="App">
        <header className="App-header">
          <img src={imageLogo} className="logo" alt="logo" />
          <div className="pokedex">Hello World - Pokedex Usando ReactJs</div>
          <div className="pokedexBtn">
            <Button variant="outline-warning" href="#app-body">
              PokeDex
            </Button>
          </div>
        </header>

        <div id="app-body" className="App-body">
          <div id="poke-container"></div>

          <Pokemons />
        </div>
      </div>
    );
  }
}

export default App;
