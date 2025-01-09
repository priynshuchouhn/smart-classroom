import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        // TODO: Add User Id here, if using clerk
        const { user_id } = { user_id: "Hello world" }
        const {courseId} = params;
        const values = await req.json();
        if(!user_id) return new NextResponse("Unauthorised", {status: 401});

        const course = await db.course.update({
            where: {
                course_id: courseId,
                user_id
            },data: {
                ...values
            }
        })
        return NextResponse.json(course);
    } catch (error) {
        console.log("[CourseId]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}