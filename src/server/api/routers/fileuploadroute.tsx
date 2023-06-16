import { z } from "zod"; 
import { 
    createTRPCRouter,
    publicProcedure
} from "../trpc";

export const fileuploadRouter = createTRPCRouter({

    getUploadedCourses: publicProcedure.query(async ({ ctx }) => {
        const uploadedfiles = await ctx.prisma.uploadedFile.findMany({
            take: 3, 
            orderBy: [{ createdAt: "desc" }]
        }); 
    
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
        .mutation(async ({ ctx, input }) => {
            const uploadedfile = await ctx.prisma.uploadedFile.create({
                data: {
                    id: input.id,
                    file_name: input.file_name, 
                    file_content: input.file_content,
                    file_type: input.file_type,
                    file_size: input.file_size
                },


            });
            const fileContentLines = input.file_content.split('\n', 3)

            const createCourse = await ctx.prisma.prototype1Course.create({
                data: {
                    title: fileContentLines [0]??"",                   
                    description: fileContentLines [1]??""    
                }
            })
            return uploadedfile 
        }),

})