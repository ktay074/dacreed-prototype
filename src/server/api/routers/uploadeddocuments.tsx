import {  z } from "zod";
import { 
    createTRPCRouter, 
    privateProcedure, 
    publicProcedure 
} from "~/server/api/trpc";

export const documentRouter = createTRPCRouter({

  getAll: publicProcedure.query(async ({ ctx }) => {
    const documents = await ctx.prisma.document.findMany({
        take: 100,
    });

    return documents.map((document) => {
        return {
          id: document.id,
          content: document.org_content,
          authorId: document.authorId,
        }
    })
  }),

  
  create: privateProcedure
    .input(
      z.object({
        org_content: z.string(),
        org_type: z.string(),
        org_name: z.string(),
        org_size: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const document = await ctx.prisma.document.create({
        data: {
          org_content: input.org_content,
          org_name: input.org_name,
          org_type: input.org_type,
          org_size: input.org_size
        },
      });

      return document;
    }),

});
