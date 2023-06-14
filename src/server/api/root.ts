import { createTRPCRouter } from "~/server/api/trpc";
import { postsRouter } from "~/server/api/routers/posts";
import { getUsers } from "~/server/api/routers/getuserdata"; 
import { documentRouter } from "./routers/uploadeddocuments";
import { coursesRouter } from "./routers/courses";
import { analyticsRouter } from "./routers/analytics";
import { coursePreferenceRouter } from "./routers/coursepreferences";
import { fileuploadRouter } from "./routers/fileupload";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  posts: postsRouter,
  findUsers: getUsers, 
  document: documentRouter,
  courses: coursesRouter,
  preferences: coursePreferenceRouter,
  analytics: analyticsRouter,
  uploadfile: fileuploadRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
