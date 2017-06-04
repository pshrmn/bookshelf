const genres = [
  {
    name: 'adventure',
    className: 'adventure',
    description: 'Books in which the characters set off a journey that is filled with challenges.'
  },
  {
    name: 'dystopian',
    className: 'dystopian',
    description: 'Books in which the protagonists work against an oppressive group in power.'
  },
  {
    name: 'fantasy',
    className: 'fantasy',
    description: 'Books in which the author makes up a universe with things that cannot/do not' +
      ' exist in our own (e.g. magic, mythical creatures).'
  },
  {
    name: 'historical',
    className: 'historical',
    description: 'Books that explore history. This includes alternative history books that' +
      ' speculate about what might have happened if some historical events did not occur.'
  },
  {
    name: 'mystery',
    className: 'mystery',
    description: 'Books in which the protagonists have to solve a problem with limited' +
      ' help/evidence (often a crime).'
  },
  {
    name: 'non-fiction',
    className: 'non-fiction',
    description: 'Books about real people, places, and things.'
  },
  {
    name: 'fiction',
    className: 'fiction',
    description: 'A general catch-all genre for works of fiction that do not fit into any of' +
      ' the other genres.'
  },
  {
    name: 'sci-fi',
    className: 'sci-fi',
    description: 'A form of fantasy in which there is a scientific explanation for why things' +
      ' work/are possible (no magic). These often take place in the future and in space or on a' +
      ' different planet, but that is neither a requirement nor an indicator that a book is science' +
      ' fiction.'
  },
  {
    name: 'thriller',
    className: 'thriller',
    description: 'Books that are a type of mystery, but often have a fast pace and leave the' +
      ' characters in perilous situations that leave the reader wanting to read more so that' +
      ' they can learn what happens next.'
  }
];

export default genres;

export const genreMap = genres.reduce((acc, curr) => {
  acc[curr.name] = curr;
  return acc;
}, {});
