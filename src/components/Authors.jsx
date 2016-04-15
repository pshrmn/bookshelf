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
    const books = author.books !== 1 ? "books": "book";
    return (
      <li key={index}>
        <Cover title={author.author}
               path={{pathname: `/author/${author.author}`}} />
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
    const authorsObject = state.books.reduce((authors, books) => {
      const { author } = books;
      if ( authors[author] ) {
        authors[author] += 1;
      } else {
        authors[author] = 1;
      }
      return authors;
    }, {});
    // convert the object to an array
    const authors = Object.keys(authorsObject)
      .map(key => ({
        author: key,
        books: authorsObject[key]
      }))
      .sort((a,b) => b.books - a.books);
    return {
      authors: authors
    };
  }
)(Authors);
