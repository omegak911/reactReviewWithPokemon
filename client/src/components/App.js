import React, { Component } from 'react';

import PokemonList from './PokemonList';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      pokemonList: [],
      clickedPokemon: -1
    }
  }

  getPokemon = (query) => {
    this.props.getPokemon(query, ({ data }) => {
      let { id, name, sprites } = data;
      this.setState({ pokemonList: [...this.state.pokemonList, { id, name, sprites }]})
    });
  }

  clickPokemon = (index) => {
    this.setState({ clickedPokemon: index });
  }

  updatePokemonName = (name) => {
    // We need to create a new array, to guarantee React re-render + setState works consistently
    let pokemonList = [...this.state.pokemonList];
    pokemonList[this.state.clickedPokemon].name = name;
    this.setState({ pokemonList, clickPokemon: -1 });
  }

  render(){
    let { pokemonList, clickedPokemon } = this.state;
    return (
      <div>
        <Search getPokemon={this.getPokemon} button="Add Pokemon"/>
        {/* Instead of creating a new component that accepts a pokemon name and handles submit, we can reuse Search.js (which already does all that) with some minor tweaks */}
        {clickedPokemon > -1 && <Search getPokemon={this.updatePokemonName} button="Update Name"/>}
        <PokemonList pokemonList={pokemonList} clickPokemon={this.clickPokemon}/>
      </div>
    )
  }
}

export default App;