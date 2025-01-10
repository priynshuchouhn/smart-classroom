import { db } from "@/lib/db";
import { Attachment } from "@prisma/client";


interface getChapterProps {
    user_id: string;
    courseId: string;
};

export const getChapter = async ({ 
    user_id, 
    courseId, 
}: getChapterProps) => {
    try {


        const course = await db.course.findUnique({
            where: {
                isPublished: true,
                course_id: courseId,
            },
        });


        if (!course) {
            throw new Error("Chapter or course not found");
        } 

        let attachments: Attachment[] = [];

        attachments = await db.attachment.findMany({
            where: {
                course_id: courseId,
            },
        });
        return {
           
            course,
            attachments,
        };

    } catch (error) {
        console.log(error);
        return {
            chapter: null,
            course: null,
            muxData: null,
            attachments: null,
            nextChapter: null,
            userProgress: null,
            purchase: null,
        }
    }
}