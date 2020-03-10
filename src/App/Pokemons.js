import React from "react";
import "./App.css";
import Card from "react-bootstrap/Card";

class Pokemons extends React.Component {
  constructor() {
    super();
    this.componentDidMount();
    console.log("cons");
    this.state = {
      pokemons: {}
    };
  }

  componentDidMount() {
    console.log("Did");
    fetch("https://pokeapi.co/api/v2/pokemon/5/")
      .then(results => results.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    console.log("render:", this.state.pokemons);
    const { pokemons } = this.state;
    return (
      <div key={pokemons.id}>
        <Card bg="white" text="warning" style={{ width: "18rem" }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>{pokemons.name}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Pokemons;
