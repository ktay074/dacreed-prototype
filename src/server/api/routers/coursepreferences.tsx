import { z } from "zod";
import {
    createTRPCRouter,
    privateProcedure,
    publicProcedure
} from "~/server/api/trpc";

export const coursePreferenceRouter = createTRPCRouter({
  updateCoursePrefs: publicProcedure
  .input(
    z.object({
      id: z.string(),
      simplicity: z.number(),
      humour: z.number(),
      professional: z.number(),
      // creativity: z.number(),
    })
  ).mutation(async ({ ctx, input }) => {
    const { simplicity, humour, professional, 
      // creativity
       id } = input;
    const updatedCoursePrefs = await ctx.prisma.coursePref.update({
      where: { id: id },
      data: {
        simplicityPref: simplicity,
        humourPref: humour,
        professionalismPref: professional,
        // creativityPref: creativity
      },
    });
    return updatedCoursePrefs;
  }),
  create: privateProcedure
  .input(
      z.object({
        simplicityPref: z.number(),
        humourPref: z.number(),
        professionalismPref: z.number(),
        creativityPref: z.number(),
        documentId: z.string(),
     })
  )
  .mutation(async ({ ctx, input }) => {
    const coursePref = await ctx.prisma.coursePref.create({
      data: {
        simplicityPref: input.simplicityPref ,
        humourPref: input.humourPref ,
        professionalismPref: input.professionalismPref,
        // creativityPref: input.creativityPref,
        documentId: input.documentId,
     },
    });
    return coursePref;
  }),
});