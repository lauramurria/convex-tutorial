// Update your server import like this:
import { query, mutation, internalAction } from "./_generated/server";
import { v } from "convex/values";

//...

export const getWikipediaSummary = internalAction({
  args: { topic: v.string() },
  handler: async (ctx, args) => {
    const response = await fetch(
      "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" +
        args.topic,
    );

    return getSummaryFromJSON(await response.json());
  },
});

function getSummaryFromJSON(data: any) {
  const firstPageId = Object.keys(data.query.pages)[0];
  return data.query.pages[firstPageId].extract;
}