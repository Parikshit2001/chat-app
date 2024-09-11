import { Router } from "express";
import {
  getUsername,
  signinUser,
  signoutUser,
  signupUser,
} from "../controllers/User";
import { verifyJWT } from "../middlewares/auth";

const router = Router();

router.route("/signin").post(signinUser);
router.route("/signup").post(signupUser);
router.route("/signout").post(signoutUser);
router.route("/getusername").get(verifyJWT, getUsername);
export default router;
