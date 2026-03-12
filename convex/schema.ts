import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  channels: defineTable({ 
    name: v.string() 
  }),
  messages: defineTable({
    body: v.string(),
    user: v.string(),
    thread: v.optional(v.id("threads")),
    channel: v.optional(v.id("channels" )),
  }),
  threads: defineTable({
    name: v.string() 
  }),
  users: defineTable({
    name: v.string()    
  }),
});