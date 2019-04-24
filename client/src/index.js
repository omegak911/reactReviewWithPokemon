import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import fakePokemonData from '../../data/fakePokemonData';
import getPokemon from '../../lib/getPokemon';

ReactDOM.render(<App pokemonList={fakePokemonData} getPokemon={getPokemon}/>, document.getElementById('app'));