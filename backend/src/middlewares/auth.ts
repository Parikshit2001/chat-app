import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { db } from "../../drizzle/db";
import { UserTable } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

export const verifyJWT = expressAsyncHandler(async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(400).json({ message: "No token sent in the request" });
    throw new Error("No token sent in the request");
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as {
    username: string;
  };

  const username = decodedToken.username;

  if (!username) {
    res.status(400).json({ message: "Empty username sent in the request" });
    throw new Error("Empty username sent in the request");
  }

  const user = await db
    .select({ username: UserTable.username, id: UserTable.id })
    .from(UserTable)
    .where(eq(UserTable.username, username));

  if (user.length !== 1) {
    res
      .status(400)
      .json({ message: "Unable to find user with given username" });
    throw new Error("Unable to find user with given username");
  }

  if (user[0].username !== username) {
    res.status(400).json({ message: "Username did not match" });
    throw new Error("Username did not match");
  }

  req.body.username = username;
  req.body.userId = user[0].id;
  next();
});
