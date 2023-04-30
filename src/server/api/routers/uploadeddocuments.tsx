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
        const authorId = ctx.userId;

        // Get the file data from the request
        const file = await ctx.req.file('file');

        // Save the file data to the database
        const document = await ctx.prisma.document.create({
            data: {
                content: input.content,
                authorId: authorId ?? "",
                file: file?.buffer,
            },
        });

        return document;
    }),
});
