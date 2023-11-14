import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateUserCase } from './create-user'
import { compare } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

let usersRepository: InMemoryUserRepository
let sut: CreateUserCase

describe('Register Use Case', () => {

    beforeEach(() => {
        usersRepository = new InMemoryUserRepository()
        sut = new CreateUserCase(usersRepository)
    })

    it('Should be able to registration', async() => {

        const { user } = await sut.execute({
            name: 'Fulano',
            email: 'fulano@mail.com',
            password: '123456'
        })

        expect(user.id).toEqual(expect.any(String))
    })

    it('should hash user password upon registration', async() => {
        const { user } = await sut.execute({
            name: 'Fulano',
            email: 'fulano@mail.com',
            password: '123456'
        })

        const isPasswordCorrectLyHashed = await compare(
            '123456',
            user.password_hash,
        )

        expect(isPasswordCorrectLyHashed).toEqual(true)
    })

    it('should not be able to register with same email twice', async() => {
        const email = 'fulano@mail.com'
        await sut.execute({ 
            name: 'Fulano', 
            email, 
            password: '123456' 
        })

        await expect(() => 
            sut.execute({ 
                name: 'Fulano', 
                email, 
                password: '123456' 
            }),
        ).rejects.toBeInstanceOf(UserAlreadyExistsError)
    })
    
})