import {
  boolean,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const UserTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("username", { length: 255 }).unique().notNull(),
});

export const ChatTable = pgTable("chats", {
  id: uuid("id").primaryKey().notNull(),
  from: uuid("from")
    .references(() => UserTable.id)
    .notNull(),
  to: uuid("to")
    .references(() => UserTable.id)
    .notNull(),
  at: timestamp("at").defaultNow().notNull(),
  message: text("message").notNull(),
});
