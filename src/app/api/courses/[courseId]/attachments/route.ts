import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
    req: Request, { params }: { params: { courseId: string } }
) {
    try {
        //TODO: change user id, replace
        const { user_id } = { user_id: "Hello world" }
        const { url } = await req.json();

        if(!user_id) return new NextResponse("Unauthorised!", {status: 401});

        const courseOwner = await db.course.findUnique({
            where: {
                course_id: params.courseId,
                user_id: user_id
            }
        })
        console.log(courseOwner, params.courseId,user_id);

        if(!courseOwner){
            return new NextResponse("Unauthorised@", {status: 401})
        }

        const attachments = await db.attachment.create({
          data:{
            url,
            name: url.split("/").pop(),
            course_id: params.courseId
          }  
        })
        return NextResponse.json(attachments)
    } catch (error) {
        console.log("[COURSE_ID_ATTACHMENTS]", error);
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}