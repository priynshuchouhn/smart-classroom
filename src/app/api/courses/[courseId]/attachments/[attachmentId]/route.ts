import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    {params}: {params : {courseId: string, attachmentId: string}}
){
    try {
        //Todo: replace this 
        const {user_id} = {user_id: "Hello world"}
    
        if(!user_id) return new NextResponse("Unauthorised...", {status: 401});
        if (!params.courseId || !params.attachmentId) {
            return new NextResponse("Invalid request parameters", { status: 400 });
          }

        const courseOwner = await db.course.findUnique({
            where: {
                course_id: params.courseId,
                user_id: user_id
            }
        })

        if(!courseOwner) return new NextResponse("Unauthorised", {status: 401});
        const attachment = await db.attachment.delete({
            where: {
                course_id: params.courseId,
                attachment_id: params.attachmentId
            }
        })
        return NextResponse.json(attachment);
    } catch (error) {
        console.log("[Attachment_Id]", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }


}