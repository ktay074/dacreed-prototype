import { createTRPCRouter } from "~/server/api/trpc";
import { postsRouter } from "~/server/api/routers/posts";
import { documentRouter } from "./routers/uploadeddocuments";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  posts: postsRouter,
  document: documentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
