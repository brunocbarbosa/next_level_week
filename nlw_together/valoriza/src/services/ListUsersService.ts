import { getRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from 'class-transformer'

class ListUsersService{
    async execute(){
        const usersRepositories = getRepository(UsersRepositories)
        
        const users = await usersRepositories.find();

        return classToPlain(users);
    }


}

export { ListUsersService }