import { Prisma } from "@prisma/client";
import { UsersRepository } from "../users-repository";

export class InMemoryUserRepository implements UsersRepository {
    async create(data: Prisma.UserCreateInput) {
        const user = {
            id: 'user-1',
            name: data.name,
            email: data.email,
            password_hash: data.password_hash,
            created_at: new Date(),
        }
        return user
    }
}