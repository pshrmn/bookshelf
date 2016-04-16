import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import Breadcrumbs from "./Breadcrumbs";
import Cover from "./Cover";

const Authors = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  authorLi: function(author, index) {
    const { name, genre } = author;
    const cleanGenre = author.genre.replace("'", '');
    return (
      <li key={name}>
        <Cover title={name}
               classes={[cleanGenre]}
               path={{pathname: `/author/${name}`}} />
      </li>
    );
  },
  breadcrumbs: function() {
    const paths = [
      {
        to: {pathname: "/"},
        title: "Home"
      }
    ];
    return (
      <Breadcrumbs paths={paths} />
    );
  },
  render: function() {
    const authors = this.props.authors.map((a,i) => this.authorLi(a,i));
    return (
      <div>
        {this.breadcrumbs()}
        <h1>Authors</h1>
        <ul className="authors">
          {authors}
        </ul>
      </div>
    );
  }
});

export default connect(
  state => {
    // get an object containing all authors and their book count
    const authorsObject = state.books.reduce((authors, book) => {
      const { author } = book;
      if ( !authors[author] ) {
        authors[author] = {
          // use the first book's genre as the author's genre (should
          // be accurate in most cases)
          genre: book.genre,
          books: 1
        };
      } else {
        authors[author].books += 1;
      }

      return authors;
    }, {});
    // convert the object to an array
    const authors = Object.keys(authorsObject)
      .map(key => ({
        name: key,
        books: authorsObject[key].books,
        genre: authorsObject[key].genre
      }))
      .sort((a,b) => b.books - a.books);
    return {
      authors: authors
    };
  }
)(Authors);
