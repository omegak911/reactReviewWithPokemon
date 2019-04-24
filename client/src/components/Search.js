import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleInput = (e) => {
    let query = e.target.value;
    this.setState({ query });
  }

  search = (e) => {
    e.preventDefault();
    this.props.getPokemon(this.state.query.toLowerCase())
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.search}>
          <input type="text" onChange={this.handleInput}/>
          <button type="submit">Add Pokemon</button>
        </form>
      </div>
    )
  }
}

export default Search;