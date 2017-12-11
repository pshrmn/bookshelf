import React from 'react';

import GenreBar from './GenreBar';
import FilteredBooks from './FilteredBooks';
import Search from './Search';

import 'sass/showcase.scss';

export default class Showcase extends React.Component {
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
    const { books } = this.props;
    return (
      <div className='showcase'>
        <div className='info'>
          {books.length} Books
          <GenreBar books={books} />
        </div>
        <Search
          placeholder='Search books...'
          update={this.updateFilter.bind(this)}
          filter={this.state.filter}
        />
        <div className='books'>
          <FilteredBooks
            books={books}
            filter={this.state.filter}
          />
        </div>
      </div>
    );
  }
}