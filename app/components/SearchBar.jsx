import React from 'react';

class SearchBar extends React.Component {
  static propTypes = {
    filterText: React.PropTypes.string.isRequired,
    onUserInput: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    filterText: ''
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />
      </form>
    );
  }
}

export default SearchBar;
