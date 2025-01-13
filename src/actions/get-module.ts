import { db } from "@/lib/db";
import { Assignment, Attachment } from "@prisma/client";


interface getModuleProps {
    moduleId: string;
};

export const getModule = async ({ 
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
        let assignment: Assignment[] = [];

        attachments = await db.attachment.findMany({
            where: {
                moduleId: moduleId,
            },
        });
        assignment = await db.assignment.findMany({
            where: {
                moduleId: moduleId,
            },
        })
        return {
           
            moduleData,
            attachments,
            assignment
        };

    } catch (error) {
        console.log(error);
        return {
            moduleData: null,
            attachments: null,
            assignment: null,
            userProgress: null,
        }
    }
}