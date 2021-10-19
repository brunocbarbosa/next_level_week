import { NextFunction, Request, Response } from 'express'

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;

    if(!authToken) return res.status(401).json({
        erroCode: 'Invalid Token'
    })
}