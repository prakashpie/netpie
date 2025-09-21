const books = [
  {
    author: "Kate Chopin",
    id: "1",
    title: "The Awakening",
  },
  {
    author: "Paul Auster",
    id: "2",
    title: "City of Glass",
  },
];

export const bookResolvers = {
  Query: {
    book: (_: never, { id }: { id: string }) => {
      return books.find((book) => book.id === id);
    },
    books: () => books,
  },
};
