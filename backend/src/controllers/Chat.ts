import expressAsyncHandler from "express-async-handler";
import { db } from "../../drizzle/db";
import { ChatTable, UserTable } from "../../drizzle/schema";
import { and, eq, or } from "drizzle-orm";

export const sendMessage = expressAsyncHandler(async (req, res, next) => {
  const {
    username,
    to,
    message,
    at,
    userId,
  }: {
    username: string;
    to: string;
    message: string;
    at: string;
    userId: string;
  } = req.body;

  if (username === to) {
    res.status(400).json({ message: "Message to self not allowed" });
    throw new Error("Message to self not allowed");
  }

  const currtime = new Date(Date.parse(at));

  const toUser = await db
    .select()
    .from(UserTable)
    .where(eq(UserTable.username, to));

  if (toUser.length !== 1) {
    res.status(400).json({ message: "Sending message to invalid User" });
    throw new Error("Sending message to invalid User");
  }

  const toUserId = toUser[0].id;

  await db.insert(ChatTable).values({
    from: userId,
    to: toUserId,
    at: currtime,
    message: message,
  });

  res.status(200).json({ message: "Success" });
});

export const getMessage = expressAsyncHandler(async (req, res, next) => {
  const {
    username,
    userId,
    withUsername,
  }: { username: string; userId: string; withUsername: string } = req.body;

  const withUser = await db
    .select()
    .from(UserTable)
    .where(eq(UserTable.username, withUsername));

  const withUserId = withUser[0].id;

  const chats = await db.query.ChatTable.findMany({
    where: (table, funcs) =>
      funcs.or(
        funcs.and(funcs.eq(table.from, withUserId), funcs.eq(table.to, userId)),
        funcs.and(funcs.eq(table.to, withUserId), funcs.eq(table.from, userId))
      ),
    with: {
      fromUser: { columns: { username: true } },
      toUser: { columns: { username: true } },
    },
    orderBy: (table, func) => func.desc(table.at),
  });

  console.log(chats);

  res.status(200).json({ message: "Success" });
});
