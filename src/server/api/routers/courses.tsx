import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import z from "zod"


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

  updateNode: publicProcedure
  .input(
    z.object({
      nodeId: z.string(),
      title: z.string(),
      description: z.string(),
    })
  ).mutation(async ({ ctx, input }) => {
    const { nodeId, title, description } = input;

    const updatedNode = await ctx.prisma.node.update({
      where: { id: nodeId },
      data: { title: title, description: description },
    });

    return updatedNode;
  }),

});
