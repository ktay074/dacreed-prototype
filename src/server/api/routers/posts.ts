import { z } from "zod";
import type {User} from "@clerk/nextjs/dist/api"
import { clerkClient } from "@clerk/nextjs/server";

import { TRPCError } from "@trpc/server";

import { 
    createTRPCRouter, 
    privateProcedure, 
    publicProcedure 
} from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  console.log(user)
    return{
        id: user.id, 
        username: user.username, 
        profileImageUrl: user.profileImageUrl
    }
}

export const postsRouter = createTRPCRouter({

  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
        take: 100,
        orderBy: [{createdAt: "desc"}]
    });

    const users = (
        await clerkClient.users.getUserList({
        userId: posts.map((post) => post.authorId),
        limit: 100,
    })
    ).map(filterUserForClient)

    console.log(users)

    return posts.map((post) => {
        const author = users.find((user) => user.id === post.authorId)

        if (!author) {
            console.error("AUTHOR NOT FOUND", post);
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: `Author for post not found. POST ID: ${post.id}, USER ID: ${post.authorId}`,
            });
          }

        return {
        post,
        author: {
            ...author,
            username: author.username
        },
    }})
  }),

  
create: privateProcedure
.input(
    z.object({
        content: z.string().min(1).max(500)
    
    })
).mutation(async ({ ctx, input }) => {
    const authorId = ctx.userId;

    const post = await ctx.prisma.post.create({
      data: {
        authorId: authorId ?? "",
        content: input.content,
      },
    });

    return post;
  }),
});
