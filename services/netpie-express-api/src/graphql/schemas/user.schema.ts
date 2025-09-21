export const userSchema = `#graphql
  type User {
    id: ID!
    email: String!
    name: String!
  }

  type Query {
    users: [User!]
    user(id: ID!): User
  }
`;
