import gql from 'graphql-tag';

const getCharacter = gql`
  query Character($id: ID) {
    character(id: $id) {
      id
      status
      origin {
        name
        type
        dimension
      }
      location {
        name
        dimension
        type
      }
      episode {
        id
        name
        air_date
      }
    }
  }
`;

export default getCharacter;
