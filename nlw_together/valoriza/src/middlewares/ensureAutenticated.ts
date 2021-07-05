import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

interface IPayLoad{
    sub: string;
    email: string
}

export function ensureAutenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization

    if(!authToken) return res.status(401).end();

    const [,token] = authToken.split(" ");

    try {
        const { sub, email } = verify(token,"aac7fa1d791a8a59c06b62814277265c") as IPayLoad;

        req.user_id = sub
        req.user_email = email

        return next();
    } catch (error) {
        return res.status(401).end();
    }
 
}
