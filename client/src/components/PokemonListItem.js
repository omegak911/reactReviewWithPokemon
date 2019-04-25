import React from 'react';

const PokemonListItem = ({ clickPokemon, index, pokemon }) =>
  <div className="pokemonItem" onClick={() => clickPokemon(index)}>
    <div>Name: {pokemon.name}</div>
    <div>Id: {pokemon.id}</div>
    <img src={pokemon.sprites.front_default} alt=""/> 
  </div>

export default PokemonListItem;