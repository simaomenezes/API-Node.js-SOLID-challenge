import { UsersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import { hash } from "bcryptjs";

interface CreateUserCaseRequest {
    name: string;
    email: string;
    password: string;
}

interface CreateUserCaseResponse {
    user: User
}

export class CreateUserCase {
    constructor(private userRepository: UsersRepository){}
    async execute({name, email, password}:CreateUserCaseRequest): Promise<CreateUserCaseResponse> {

        const password_hash = await hash(password, 6)
        const user = await this.userRepository.create({
            name,
            email,
            password_hash,
        })

        return { 
            user,
        }
    }
}