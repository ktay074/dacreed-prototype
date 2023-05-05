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

  getById: publicProcedure.query<{id: string}>(async ({ ctx }) => {
    const course = await ctx.prisma.course.findUnique({
      where: { id: ctx.id },
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

    if (!course) {
      throw new Error(`Course with id ${ctx.id} not found`);
    }

    return course;
  }),
});
