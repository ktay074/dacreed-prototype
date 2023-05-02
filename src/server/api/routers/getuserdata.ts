import { create } from "domain";
import { z } from "zod";
import { 
    createTRPCRouter, 
    publicProcedure 
} from "~/server/api/trpc";

export const getUser = createTRPCRouter({

    getUser: publicProcedure
        // validate what is coming through the endpoint using zod 
        .input(
            z.object({
                userid: z.string(),
            })
        )
        .query(async ({ ctx, input }) => {
            const user = await ctx.prisma.user.findUnique({
                where: {
                    id: input.userid
                },
            });
            return user; 
        })
})