import { response } from "express";
import { ListUsersService } from "../services/ListUsers"

class ListUsersController{

    async handle(){
        const listUsersService = new ListUsersService() ;
        
        const users = await listUsersService.execute();

        return response.json(users)
    }
}

export { ListUsersController} 