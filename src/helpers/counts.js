export function genresByCount(books) {
  const genreCounts = books.reduce((dict, curr) => {
    const genre = curr.genre;
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
}

export function mostPopularAuthors(books) {
  const authorCounts = books.reduce((dict, curr) => {
    const author = curr.author;
    if ( dict[author] !== undefined ) {
      dict[author] += 1;
    } else {
      dict[author] = 1;
    }
    return dict;
  }, {});

  const authorMap = Object.keys(authorCounts).map(author => {
    return {
      author: author,
      count: authorCounts[author]
    }
  });
  authorMap.sort((a,b) => b.count - a.count);
  return authorMap.slice(0,5);
}
