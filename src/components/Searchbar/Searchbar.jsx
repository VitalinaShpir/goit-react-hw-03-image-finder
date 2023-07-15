import { Component } from 'react';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  inputChange = ({target: {value}}) => {
    // const {query} = e.currentTarget;
    this.setState({value});

    console.log({value})

  };

  handleSearchSubmit = (e) => {
   
    e.preventDefault();
    // if (!this.state.query.trim()) {
    //   return;
    // }
    this.props.onSubmit(this.state.value.trim());

    this.setState({ value: '' });
  };

  render() {
    // const {query} = this.state
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSearchSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
