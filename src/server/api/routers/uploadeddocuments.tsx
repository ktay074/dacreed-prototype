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
        simplicityPref: z.array(z.number()),
        humourPref: z.array(z.number()),
        professionalismPref: z.array(z.number()),
      })
  )
  .mutation(async ({ ctx, input }) => {
    const coursePref = await ctx.prisma.coursePref.create({
      data: {
        simplicityPref: { set: input.simplicityPref },
        humourPref: { set: input.humourPref },
        proffesionalismPref: { set: input.professionalismPref }
      },
    });

    return coursePref;
  }),


  

});
