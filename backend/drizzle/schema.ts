import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const UserTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("username", { length: 255 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const ChatTable = pgTable("chats", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  from: uuid("from")
    .references(() => UserTable.id)
    .notNull(),
  to: uuid("to")
    .references(() => UserTable.id)
    .notNull(),
  at: timestamp("at").defaultNow().notNull(),
  message: text("message").notNull(),
});

// RELATIONS

export const UserTableRelations = relations(UserTable, ({ one, many }) => {
  return {
    chats: many(ChatTable),
  };
});

export const ChatTableRelations = relations(ChatTable, ({ one }) => {
  return {
    fromUser: one(UserTable, {
      fields: [ChatTable.from],
      references: [UserTable.id],
    }),
    toUser: one(UserTable, {
      fields: [ChatTable.to],
      references: [UserTable.id],
    }),
  };
});
