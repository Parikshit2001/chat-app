import { Router } from "express";
import { getMessage, sendMessage } from "../controllers/Chat";
import { verifyJWT } from "../middlewares/auth";

const router = Router();

router.route("/send").post(verifyJWT, sendMessage);
router.route("/getmessages").post(verifyJWT, getMessage);

export default router;
