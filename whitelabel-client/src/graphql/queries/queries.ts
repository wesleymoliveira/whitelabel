import gql from "graphql-tag";

export const QUERY_DEVELOPERS = gql`
  query QueryDevelopers {
    developers {
      id
      image {
        id
        name
        url
      }
      name
      role
      socialLinks {
        id
        title
        url
      }
      description
    }
  }
`;
