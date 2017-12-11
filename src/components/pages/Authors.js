import React from 'react';
import PropTypes from 'prop-types';

import Search from 'components/Search';

import FilteredAuthors from 'components/FilteredAuthors';

import 'sass/authors.scss';

export default class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
  }
  
  updateFilter(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Search
          placeholder='Search authors...'
          update={this.updateFilter.bind(this)}
          filter={this.state.filter}
        />
        <ul className='authors'>
          <FilteredAuthors
            authors={this.props.data.authors}
            filter={this.state.filter}
          />
        </ul>
      </div>
    );
  }
}

Authors.propTypes = {
  data: PropTypes.shape({
    authors: PropTypes.array.isRequired
  }).isRequired
};
