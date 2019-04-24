import axios from 'axios';

const getPokemon = (query, callback) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${query}/`)
    .then(callback)
    .catch(err => console.log(err));
}

export default getPokemon;