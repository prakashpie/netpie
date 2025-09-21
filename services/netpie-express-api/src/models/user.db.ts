import { User } from '@/types/user';

// This is a mock in-memory database. In a real application, you would use a database like PostgreSQL, MongoDB, etc.
const users: User[] = [
  {
    email: 'alice@example.com',
    id: '1',
    name: 'Alice',
  },
  {
    email: 'bob@example.com',
    id: '2',
    name: 'Bob',
  },
];

export const db = {
  users,
};
