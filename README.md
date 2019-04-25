# reactReviewWithPokemon

Get additional practice with React by creating a front end application that renders data from pokemon api.  This will require some knowledge on React

## Getting Started

### Clone
  - git clone https://github.com/omegak911/reactReviewWithPokemon.git
  - cd reactReviewWithPokemon

### Setup
  - npm install
  - npm start
  - npm run build

### Steps
At each step, before moving on, answer the following question: What justifies my expectation that I completed the requirement?  If you cannot justify this, then it means you haven't tested it yet.

STEP 1: Connect your react app to the browser

STEP 2: Render all the components + validate that they are all connected properly

STEP 3: Pass mock pokemon data down to App as props + render said data
  3a: this will require you to set props to state, do not do this in the constructor
  3b: set props to your state once your component mounts

STEP 4: Design Search.js such that a user can input data and on submit, run a function that console.log's what the user has submitted so far

STEP 5: using axios + https://pokeapi.co/, complete the lib/getPokemon.js function
  4a: hint: google npm axios to find out the syntax for a GET request

STEP 6: Pass getPokemon function to App + configure the app so that when user submits, it will run getPokemon function instead of the console.log

STEP 7: As needed, update getPokemon.js so that pokemon data received from the API will render on the page in addition to any existing pokemon data
  7a: remove the mock data

### Advanced
Note: if you're not comfortable with STEPS 1-7, redo STEPS 1-7 instead

STEP 8: create a new feature
STEP 9: add css, you may use this as reference https://www.pokemon.com/us/pokedex/
STEP 10: on mount, render the original 151 pokemon, in the correct order 
STEP 11: refactor application to use redux instead of passing props down manually
