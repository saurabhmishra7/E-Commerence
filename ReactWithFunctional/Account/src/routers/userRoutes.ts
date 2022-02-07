import middleware from "../middlewares/userMiddleware";
import controller from "../controllers/userControllers";
import { Router } from "express";
import ejs from "ejs";
import { Request,Response } from "express";

export const router: Router = Router();
router.post('/register', middleware.validateUserDetails,middleware.emailAuthentication, controller.insertUser);
router.post('/login', middleware.authenticateLoginCredential, controller.userLogin);
