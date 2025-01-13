import { db } from "@/lib/db";
import { Attachment } from "@prisma/client";


interface getModuleProps {
    user_id: string;
    moduleId: string;
};

export const getModule = async ({ 
    user_id, 
    moduleId, 
}: getModuleProps) => {
    try {


        const moduleData = await db.module.findUnique({
            where: {
                isPublished: true,
                moduleId: moduleId,
            },
        });


        if (!moduleData) {
            throw new Error("Module or subject not found");
        } 

        let attachments: Attachment[] = [];

        attachments = await db.attachment.findMany({
            where: {
                moduleId: moduleId,
            },
        });
        return {
           
            moduleData,
            attachments,
        };

    } catch (error) {
        console.log(error);
        return {
            moduleData: null,
            attachments: null,
            userProgress: null,
        }
    }
}