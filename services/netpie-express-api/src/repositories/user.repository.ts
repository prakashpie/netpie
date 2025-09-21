import pool from "@/config/db";
import { NotFoundError } from "@/types/errors";
import { User } from "@/types/user";

export class UserRepository {
  public async findAll(): Promise<User[]> {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  }

  public async findById(id: string): Promise<User> {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = result.rows[0];
    if (!user) {
      throw new NotFoundError(`User with id ${id} not found`);
    }
    return user;
  }
}
