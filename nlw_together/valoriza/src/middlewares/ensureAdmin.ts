import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
    const { user_id, user_email } = req;
    console.log("Id: ", user_id)
    console.log("email: ", user_email)

    const usersRepositories = getCustomRepository(UsersRepositories);

    const { admin } = await usersRepositories.findOne(user_id);
  
    if(admin){
        return next();
    }

    return res.status(401).json({
        error: "Unauthorized"
    });
}