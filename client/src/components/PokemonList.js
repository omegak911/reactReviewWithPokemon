import React from 'react';
import PokemonListItem from './PokemonListItem';

const PokemonList = ({ clickPokemon, pokemonList }) =>
  <div id="pokemonList">
    {pokemonList.map((pokemon, idx) =>
      <PokemonListItem key={idx} index={idx} pokemon={pokemon} clickPokemon={clickPokemon} />
    )}
  </div>

export default PokemonList;