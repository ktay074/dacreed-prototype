import { create } from "domain";
import { z } from "zod";
import { 
    createTRPCRouter, 
    publicProcedure 
} from "~/server/api/trpc";

export const getUsers = createTRPCRouter({

    getUsers: publicProcedure
        // validate what is coming through the endpoint using zod 
        // .input(
        //     z.object({
        //         userid: z.string(),
        //     })
        // )
        .query(async ({ ctx, input }) => {
            const user = await ctx.prisma.user.findMany({
                take: 5,
                orderBy: [{ username: "desc" }]
            });
            return user; 
        })
})

