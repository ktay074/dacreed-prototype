import { z } from "zod";

import { 
    createTRPCRouter, 
    privateProcedure, 
    publicProcedure 
} from "~/server/api/trpc";

export const analyticsRouter = createTRPCRouter({

  getAll: publicProcedure.query(async ({ ctx }) => {
    const events = await ctx.prisma.events.findMany({
        take: 100,
    });

    return events
  }),

  
    create: privateProcedure
    .input(
        z.object({
            id: z.optional(z.string()),
            timeZone: z.string(),
            region: z.string(),
            country: z.string(),
            page: z.string(),
            timeSpent: z.number(),
            scrolling: z.number(),
            mouseClicks: z.number(),
            buttonClicks: z.number(),
            linkClicks: z.number(),
            mouseMoveInt: z.number(),
            keyClicks: z.number(),
    
        })
        ).mutation(async ({ ctx, input }) => {

        const event = await ctx.prisma.events.create({
            data: {
                id: input.id ?? "",
                timeZone: input.timeZone,
                region: input.region,
                country: input.country,
                page: input.page,
                timeSpent: input.timeSpent,
                scrolling: input.scrolling,
                mouseClicks: input.mouseClicks,
                buttonClicks: input.buttonClicks,
                linkClicks: input.linkClicks,
                mouseMoveInt: input.mouseMoveInt,
                keyClicks: input.keyClicks,
            },
        });

            return event;
    }),
});
