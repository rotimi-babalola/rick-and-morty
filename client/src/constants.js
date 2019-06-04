export const API_URL = 'https://rickandmortyapi.com/graphql';

export const CHARACTERS_QUERY = `
  {
    characters(page: 1) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        image
      }
    }
  }
`;
