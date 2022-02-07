import userServices from "../services/adminServices";
import { Request, Response } from "express";
import { Message as message } from "../constant/message";

async function insertUser(req: Request, res: Response) {
  try {
    const userInformation: object = {
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };
    const token = req.body.token;
    await userServices.insertUser(userInformation);
    res.header("auth-token",token).send(message.registered);
   
  } catch (error) {
    res.send(message.unregister + "\n" + error);
  }
}

async function userLogin(req: Request, res: Response) {
  try {
    const token = req.body.token;
    res.header("auth-token",token).send({message: message.welcome,token: token});
  } catch (error) {
    res.send(`${message.unlogged} \n ${error}`);
  }
}

export default{
  insertUser,
  userLogin
}
