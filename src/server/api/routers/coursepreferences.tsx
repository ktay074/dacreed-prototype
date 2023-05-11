import { z } from "zod";
import { 
    createTRPCRouter, 
    privateProcedure, 
} from "~/server/api/trpc";

export const coursePreferenceRouter = createTRPCRouter({
  create: privateProcedure
  .input(
      z.object({
        simplicityPref: z.array(z.number()),
        humourPref: z.array(z.number()),
        professionalismPref: z.array(z.number()),
        documentId: z.string(),
     })
  )
  .mutation(async ({ ctx, input }) => {
    const coursePref = await ctx.prisma.coursePref.create({
      data: {
        simplicityPref: { set: input.simplicityPref },
        humourPref: { set: input.humourPref },
        professionalismPref: { set: input.professionalismPref },
        documentId: input.documentId,
     },
    });

    return coursePref;
  }),
});
