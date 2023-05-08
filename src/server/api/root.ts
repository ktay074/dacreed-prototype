import { createTRPCRouter } from "~/server/api/trpc";
import { postsRouter } from "~/server/api/routers/posts";
import { documentRouter } from "./routers/uploadeddocuments";
import { coursesRouter } from "./routers/courses";
import { coursePreferenceRouter } from "./routers/coursepreferences";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  posts: postsRouter,
  document: documentRouter,
  courses: coursesRouter,
  preferences: coursePreferenceRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
