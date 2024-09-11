import { Router } from "express";
import {
  getUsername,
  getUsers,
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
router.route("/getusers").get(verifyJWT, getUsers);
export default router;
