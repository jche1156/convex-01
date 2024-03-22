import { v } from "convex/values";
import { query, mutation, action } from "./_generated/server";
import { api } from "./_generated/api";

export const addRecipe = mutation({
  args: {
    ingredients: v.string(),
    instructions: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("recipes", { ingredients: args.ingredients, instructions: args.instructions });
    console.log("Added new recipe with id:", id);
  },
});
