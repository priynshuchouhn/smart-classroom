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

        const unpublishedCourse = await db.course.update({
            where: {
                course_id: params.courseId
            },data: {
                isPublished: false
            }
        })
        return NextResponse.json(unpublishedCourse);
    } catch (error) {
        console.log("[COURSE_ID_UNPUBLISH]", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}