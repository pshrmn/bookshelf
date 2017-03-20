const genres = [
  {
    name: 'adventure',
    className: 'adventure'
  },
  {
    name: 'dystopian',
    className: 'dystopian'
  },
  {
    name: 'fantasy',
    className: 'fantasy'
  },
  {
    name: 'historical',
    className: 'historical'
  },
  {
    name: 'mystery',
    className: 'mystery'
  },
  {
    name: 'non-fiction',
    className: 'non-fiction'
  },
  {
    name: 'poetry',
    className: 'poetry'
  },
  {
    name: 'sci-fi',
    className: 'sci-fi'
  },
  {
    name: 'thriller',
    className: 'thriller'
  },
  {
    name: 'drama',
    className: 'drama'
  },
];

export default genres;

export const genreMap = genres.reduce((acc, curr) => {
  acc[curr.name] = curr;
  return acc;
}, {});
