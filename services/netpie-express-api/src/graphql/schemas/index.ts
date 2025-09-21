import { userSchema } from './user.schema';
import { greetSchema } from './greet.schema';

// This is a base schema that you can extend
const baseSchema = `#graphql
  type Query
  type Mutation {
    _empty: String
  }
`;

export const typeDefs = [baseSchema, userSchema, greetSchema];
