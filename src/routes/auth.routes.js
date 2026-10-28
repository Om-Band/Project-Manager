import { Router } from "express";
import { login, registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../midllewares/validator.middleware.js";
import { UserLoginValidator, userRegisterValidator } from "../validators/index.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(UserLoginValidator(),validate,login);

export default router;
export { router as authRouter };
