import { db } from "@/lib/db";
import { Assignment, Attachment, StudentAttachment } from "@prisma/client";


interface getModuleProps {
    moduleId: string;
    userId: string
};

export const getModule = async ({ 
    moduleId,
    userId 
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
        let studentSubmission: StudentAttachment | null = null

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
        studentSubmission = await db.studentAttachment.findFirst({
            where: {
                moduleId: moduleId,
                studentId: userId
            }
        })
        return {
           
            moduleData,
            attachments,
            assignment,
            studentSubmission
        };

    } catch (error) {
        console.log(error);
        return {
            moduleData: null,
            attachments: null,
            assignment: null,
            studentSubmission: null,
            userProgress: null,
        }
    }
}