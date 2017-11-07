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
  const genreCounts = countByProperty(books, 'genre');
  return Object.keys(genreCounts)
    .map(genre => {
      return {
        genre: genre,
        count: genreCounts[genre]
      };
    });
}

function incrementKey(obj, key) {
  if (obj[key] === undefined) {
    obj[key] = 0;
  }
  obj[key]++;
}

export function mostPopularAuthors(books) {
  const authorCounts = books.reduce((acc, curr) => {
    if (curr.authors) {
      curr.authors.forEach(a => {
        incrementKey(acc, a);
      });
    } else {
      incrementKey(acc, curr.author);
    }
    return acc;
  }, {});

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
