import React from "react";

import BarChart from "./OrdinalBarChart";

export default React.createClass({
  render: function() {
    let { books } = this.props;
    return (
      <div className="stats">
        <GenreBars books={books} />
        <PopularAuthors books={books} />
      </div>
    );
  }
});

let GenreBars = React.createClass({
  // count how many instances of each genre there are
  counts: function() {
    let genreCounts = this.props.books.reduce((dict, curr) => {
      let genre = curr.genre;
      if ( dict[genre] !== undefined ) {
        dict[genre] += 1;
      } else {
        dict[genre] = 1;
      }
      return dict;
    }, {});

    return Object.keys(genreCounts).map(genre => {
      return {
        genre: genre,
        count: genreCounts[genre]
      };
    });
  },
  render: function() {
    let genreCounts = this.counts();

    return (
      <div className="bars">
        <h2>Books per Genre</h2>
        <BarChart data={genreCounts}
                  getX={d => d.genre}
                  getY={d => d.count} />
      </div>
    );
  }
});

let PopularAuthors = React.createClass({
  counts: function() {
    let authorCounts = this.props.books.reduce((dict, curr) => {
      let author = curr.author;
      if ( dict[author] !== undefined ) {
        dict[author] += 1;
      } else {
        dict[author] = 1;
      }
      return dict;
    }, {});

    let authorMap = Object.keys(authorCounts).map(author => {
      return {
        author: author,
        count: authorCounts[author]
      }
    });
    authorMap.sort((a,b) => a.count < b.count);
    return authorMap.slice(0,5);
  },
  render: function() {
    let authors = this.counts().map((a,i) => {
      return (
        <li key={i}>
          {a.author} - {a.count}
        </li>
      );
    });
    return (
      <div className="authors">
        <h2>Most Read Authors</h2>
        <ol>
          {authors}
        </ol>
      </div>
    );
  }
});
