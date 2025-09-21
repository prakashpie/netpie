import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { Express } from 'express';

import { resolvers } from './resolvers';
import { typeDefs } from './schemas';

export const applyApolloMiddleware = async (app: Express) => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });

  await server.start();

  app.use('/graphql', expressMiddleware(server));
};
