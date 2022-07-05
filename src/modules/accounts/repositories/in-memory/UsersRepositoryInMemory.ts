import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];
  async create({
    name,
    password,
    email,
    driver_license,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      password,
      email,
      driver_license,
      avatar,
    });

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }
}
export { UsersRepositoryInMemory };
