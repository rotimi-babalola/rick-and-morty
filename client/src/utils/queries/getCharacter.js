import gql from 'graphql-tag';

const getCharacter = gql`
  query Character($id: ID) {
    character(id: $id) {
      id
      name
      status
      gender
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
      image
      episode {
        id
        name
        air_date
      }
    }
  }
`;

export default getCharacter;
