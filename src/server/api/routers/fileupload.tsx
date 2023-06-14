import { z } from "zod"; 
import { 
    createTRPCRouter,
    publicProcedure
} from "../trpc";

export const fileuploadRouter = createTRPCRouter({

    getAll: publicProcedure.query(async ({ ctx }) => {
        const uploadedfiles = await ctx.prisma.uploadedFile.findMany(); 
    
        return uploadedfiles
    }),
    
    
    create: publicProcedure
        .input(
            z.object({
                id: z.string(),
                file_name: z.string(),
                file_content: z.string(),
                file_type: z.string(), 
                file_size: z.number(), 
            })
        )
        .mutation(async ({ ctx, input}) => {
            const uploadedfile = await ctx.prisma.uploadedFile.create({
                data: {
                    id: input.id,
                    file_name: input.file_name, 
                    file_content: input.file_content,
                    file_type: input.file_type,
                    file_size: input.file_size
                },
            });

            return uploadedfile
        }),
})