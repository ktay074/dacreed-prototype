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
          content: document.content,
          authorId: document.authorId,
        }
    })
  }),

  
  create: privateProcedure
    .input(
      z.object({
        bytes: z.array(z.number()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const buffer = Buffer.from(input.bytes);
      const document = await ctx.prisma.document.create({
        data: {
          content: buffer,
        },
      });

      return document;
    }),

});
