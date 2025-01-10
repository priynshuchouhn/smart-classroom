import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    {params} : {params: {courseId: string}}
){
    try {
        const {user_id} = {user_id: "Hello world"}
        if(!user_id) return new NextResponse("Unauthorised", {status: 401});
        const course = await db.course.findUnique({
            where: {
                course_id: params.courseId
            }
        })
        if(!course) return new NextResponse("Not Found", {status: 404});

        if(!course.title || !course.subject_id) return new NextResponse("Missing fields", {status: 400});

        const publishedCourse = await db.course.update({
            where: {
                course_id: params.courseId
            },data: {
                isPublished: true
            }
        })
        return NextResponse.json(publishedCourse);
    } catch (error) {
        console.log("[COURSE_ID_PUBLISH]", error)
    }
}