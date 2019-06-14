import gql from 'graphql-tag';

const getCharacters = gql`
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

export default getCharacters;
