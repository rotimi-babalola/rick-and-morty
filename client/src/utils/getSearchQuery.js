import gql from 'graphql-tag';

/**
 *
 * @param {number} pageNumber - page number to get
 * @param {object} filter - fields to filter by
 */
const getCharactersQuery = gql`
  query Characters($pageNumber: Int, $filter: FilterCharacter) {
    characters(page: $pageNumber, filter: $filter) {
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
