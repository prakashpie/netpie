export const greetSchema = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String
  }
  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }
`;
