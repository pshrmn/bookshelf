import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import Breadcrumbs from "./Breadcrumbs";

const Authors = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  authorLi: function(author, index) {
    const books = author.books !== 1 ? "books": "book";
    return (
      <li key={index}>
        <Link to={{pathname: `/author/${author.author}`}}>{author.author}</Link>
        {` - ${author.books} ${books}`}
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
        <ul>
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
    const authors = Object.keys(authorsObject).map(key => ({
      author: key,
      books: authorsObject[key]
    }));
    return {
      authors: authors
    };
  }
)(Authors);
