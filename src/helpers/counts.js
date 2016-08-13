function countByProperty(arr, prop) {
  return arr
    .reduce((dict, curr) => {
      const value = curr[prop];
      if ( dict[value] !== undefined ) {
        dict[value] += 1;
      } else {
        dict[value] = 1;
      }
      return dict;
    }, {});
}

export function genresByCount(books) {
  const genreCounts = countByProperty(books, "genre");
  return Object.keys(genreCounts)
    .map(genre => {
      return {
        genre: genre,
        count: genreCounts[genre]
      };
    });
}

export function mostPopularAuthors(books) {
  const authorCounts = countByProperty(books, "author");

  return Object.keys(authorCounts)
    .map(author => {
      return {
        author: author,
        count: authorCounts[author]
      };
    })
    .sort((a,b) => b.count - a.count)
    .slice(0, 5);
}
