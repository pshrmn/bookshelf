import React from 'react';
import PropTypes from 'prop-types';

import 'sass/search.scss';

export default class Search extends React.Component {
  handleChange(event) {
    this.props.update(event.target.value);
  }

  render() {
    return (
      <div className='search'>
        <input
          type='text'
          placeholder={this.props.placeholder}
          value={this.props.filter}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string,
  update: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};