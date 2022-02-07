import middleware from "../middlewares/adminMiddleware";
import controller from "../controllers/adminController";
import { Router } from "express";

export const router: Router = Router();
router.post('/register', middleware.validateUserDetails,middleware.emailAuthentication, controller.insertUser);
router.post('/login', middleware.authenticateLoginCredential, controller.userLogin);
