import React, { Component } from 'react';

class PokemonListItem extends Component {
  shouldComponentUpdate(prevProp) { //without this, component will rerender on EVERY state change
    return prevProp.pokemon !== this.props.pokemon; //re-render only if it's a new object
  }
  render() {
    let { clickPokemon, index, pokemon } = this.props;
    return (<div className="pokemonItem" onClick={() => clickPokemon(index)}>
      <div>Name: {pokemon.name}</div>
      <div>Id: {pokemon.id}</div>
      <img src={pokemon.sprites.front_default} alt=""/> 
    </div>)
  }
}


export default PokemonListItem;