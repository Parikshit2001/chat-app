import { Router } from "express";

const router = Router();

router.route("/signin").post(signinUser);
router.route("/signup").post(signupUser);
router.route("/signout").post(signoutUser);

export default router;
