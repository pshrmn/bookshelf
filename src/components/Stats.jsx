import React from "react";

import BarChart from "./OrdinalBarChart";

export default React.createClass({
  render: function() {
    let { books } = this.props;
    return (
      <div className="stats">
        <GenreBars books={books} />
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
        <BarChart data={genreCounts}
                  getX={d => d.genre}
                  getY={d => d.count} />
      </div>
    );
  }
});
