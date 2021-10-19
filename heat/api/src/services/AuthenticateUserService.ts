import axios from "axios";
import prismaClient from "../prisma";
import { sign } from 'jsonwebtoken'

interface IAccessTokenResponse{
  access_token: string
}

interface IUserResponse{
  name: string,
  avatar_url: string,
  login: string,
  id: number,
  number: string
}

class AuthenticateUserService{
  async execute(code: string){
    const url = 'https://github.com/login/oauth/access_token';

    const { data: accesTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }, 
      headers:{
        Accept: "application/json"
      }
    });

    const res = await axios.get<IUserResponse>('https://api.github.com/user', {
      headers:{
        authorization:`Bearer ${accesTokenResponse.access_token}`
      }
    })

    const { login, id, avatar_url, name } = res.data;

    let user = await prismaClient.user.findFirst({
      where:{
        github_id: id
      }
    })

    if(!user){
      user = await prismaClient.user.create({
        data:{
          github_id: id,
          login,
          avatar_url,
          name
        }
      })
    }

    const token = sign(
      {
        user: {
          name: user.name,
          avatar_ur: user.avatar_url,
          id: user.id
        }  
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "1d"
      }
    )

    return res.data;
  }
}

export { AuthenticateUserService }