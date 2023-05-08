import { z } from "zod";
import { 
    createTRPCRouter, 
    privateProcedure, 
} from "~/server/api/trpc";

export const coursePreferenceRouter = createTRPCRouter({
  create: privateProcedure
  .input(
      z.object({
        id: z.optional(z.string()),
        simplicityPref: z.array(z.number()),
        humourPref: z.array(z.number()),
        professionalismPref: z.array(z.number()),
        id: z.optional(z.string()), // add the id property and set it to undefined
      })
  )
  .mutation(async ({ ctx, input }) => {
    const coursePref = await ctx.prisma.coursePref.create({
      data: {
        id: input.id ?? "", 
        simplicityPref: { set: input.simplicityPref },
        humourPref: { set: input.humourPref },
        proffesionalismPref: { set: input.professionalismPref },
        id: input.id ?? "", // include the id property in the data
      },
    });

    return coursePref;
  }),
});
