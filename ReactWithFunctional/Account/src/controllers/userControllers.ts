import userServices from "../services/userServices";
import { Request, Response } from "express";
import { Message as message } from "../constant/message";
import ejs from "ejs";
import cartService  from "../services/cartServices"

async function insertUser(req: Request, res: Response) {
  try {
    const userInformation: object = {
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };
    const userName = req.body.userName;
    const token = req.body.token;
    await userServices.insertUser(userInformation);
    const userDetails:any = await userServices.verifyUser(userName); 
    console.log(userDetails.userID,"fvs");
    await cartService.insertCart(userDetails.userID);
    res.header("auth-token",token).send({message:message.registered,token:token,userID:userDetails.userID});
    /* ejs.renderFile(
      __dirname + "/views/email.ejs",
      { name: req.body.firstName },
      function (_err, data) {
        var mainOptions = {
          from: "saurabh@newput.com",
          to: req.body.email,
          subject: "Welcome Mail",
          html: data,
        };
        userServices.transporter().sendMail(mainOptions, function (_err, info) {
          console.log("Message sent: " + info.response);
        }); 
      }
    ); */
  } catch (error) {
    res.send(message.unregister + "\n" + error);
  }
}

async function userLogin(req: Request, res: Response) {
  try {
    const token = req.body.token;
    const userID = req.body.userID;
    res.header("auth-token",token).send({message: message.welcome,token: token,userID: userID});
  } catch (error) {
    res.send(`${message.unlogged} \n ${error}`);
  }
}

export default{
  insertUser,
  userLogin
}
