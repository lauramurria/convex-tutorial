import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const sendMessage = mutation({
  args: {
    user: v.string(),
    body: v.string(),
    thread: v.optional(v.id("threads")),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      user: args.user,
      body: args.body,
      thread: args.thread,
    });
  },
});

export const getMessages = query({
  handler: async (ctx) => {
    return (await ctx.db.query("messages").order("desc").take(50)).reverse();
  },
});