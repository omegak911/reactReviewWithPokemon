import React from 'react';

const PokemonListItem = ({ pokemon }) =>
  <div className="pokemonItem">
    <div>Name: {pokemon.name}</div>
    <div>Id: {pokemon.id}</div>
    <img src={pokemon.sprites.front_default} alt=""/> 
  </div>

export default PokemonListItem;