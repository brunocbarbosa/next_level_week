import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class CreateMessageController{
  async handle(req: Request, res: Response ){
      const { text } = req.body;
  }
}

export { CreateMessageController }