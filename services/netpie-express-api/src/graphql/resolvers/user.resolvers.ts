import { GraphQLError } from "graphql";

import { UserService } from "@/services/user.service";

const userService = new UserService();

export const userResolvers = {
  Query: {
    user: async (_: never, { id }: { id: string }) => {
      try {
        return await userService.getUserById(id);
      } catch {
        // In a real app, you'd have more robust error handling
        throw new GraphQLError('Got error', {
          extensions: { code: "NOT_FOUND" },
        });
      }
    },
    users: async () => {
      return await userService.getUsers();
    },
  },
  // Mutation: {
  //   createUser: ...
  // }
};
