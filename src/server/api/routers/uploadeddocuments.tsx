import { prisma } from '~/server/db';
import { any, z } from "zod";
import type { RouterOutputs } from '~/utils/api';
import { 
    createTRPCRouter, 
    privateProcedure, 
    publicProcedure 
} from "~/server/api/trpc";
import type { NextApiRequest } from 'next';

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
            org_Content: z.string(),
            org_DateTime: z.date()
        })
    )
    .mutation(async ({ ctx, input }) => {
      const document = await ctx.prisma.content.create({
        data: {
          org_DateTime: input.org_DateTime,
          org_Content: input.org_Content,
        },
      });
  
      return document;
    }),
});
