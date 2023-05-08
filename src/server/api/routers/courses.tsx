import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const coursesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const courses = await ctx.prisma.course.findMany({
      select: {
        id: true,
        title: true,
        nodes: {
          select: {
            id: true,
            title: true,
            description: true,
          },
        },
      },
    });



    return courses;
  }),

});
