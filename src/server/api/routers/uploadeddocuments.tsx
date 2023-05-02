import { prisma } from '~/server/db';
import { any, z } from "zod";
import type { RouterOutputs } from '~/utils/api';
import { 
    createTRPCRouter, 
    privateProcedure, 
    publicProcedure 
} from "~/server/api/trpc";
import type { NextApiRequest } from 'next';

interface CustomContext {
  prisma: typeof prisma;
  userId: string | null;
  session: string;
  req: NextApiRequest;
}

export const documentRouter = createTRPCRouter({

  getAll: publicProcedure.query(async ({ ctx }) => {
    const documents = await ctx.prisma.document.findMany({
        take: 100,
        orderBy: [{createdAt: "desc"}]
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
            content: z.string()
        })
    )
    .mutation(async ({ ctx, input }) => {
    
    }),
});
