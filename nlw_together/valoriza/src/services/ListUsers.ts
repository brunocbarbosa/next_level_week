import { getRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

class ListUsersService{
    async execute(){
        const usersRepositories = getRepository(UsersRepositories)
        
        const users = await usersRepositories.find();

        return users;
    }


}

export { ListUsersService }