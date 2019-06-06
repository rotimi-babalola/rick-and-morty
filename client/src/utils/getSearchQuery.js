import gql from 'graphql-tag';

/**
 *
 * @param {number} pageNumber - page number to get
 * @param {object} filter - fields to filter by
 */
const getCharactersQuery = (pageNumber = 1, filter = {}) => gql`
  {
    characters(page: ${pageNumber}, filter: ${JSON.stringify(filter)}) {
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
        gender
      }
    }
  }
`;

export default getCharactersQuery;
