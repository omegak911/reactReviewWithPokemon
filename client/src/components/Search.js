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
    this.setState({ query: '' });
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.search}>
          <input type="text" onChange={this.handleInput} value={this.state.query}/>
          <button type="submit">{this.props.button}</button>
        </form>
      </div>
    )
  }
}

export default Search;