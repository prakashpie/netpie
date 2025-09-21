import { AppDataSource } from "@/data-source";
import { User } from "@/entities/user.entity";
import { NotFoundError } from '@/types/errors';

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  public async getUserById(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundError(`User with id ${id} not found`);
    }
    return user;
  }

  public async getUsers() {
    return this.userRepository.find();
  }
}
