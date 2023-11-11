import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateUserCase } from './create-user'

let usersRepository: InMemoryUserRepository
let sut: CreateUserCase

describe('Register Use Case', () => {

    beforeEach(() => {
        usersRepository = new InMemoryUserRepository()
        sut = new CreateUserCase(usersRepository)
    })

    it('Should be able to create', async() => {
        
        const { user } = await sut.execute({
            name: 'Fulano',
            email: 'fulano@mail.com',
            password: '123456'
        })

        expect(user.id).toEqual(expect.any(String))
    })
    
})