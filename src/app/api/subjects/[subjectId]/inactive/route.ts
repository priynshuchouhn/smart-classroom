import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    {params} : {params: {subjectId: string}}
){
    try {
        const course = await db.subject.findUnique({
            where: {
                subjectId: params.subjectId
            }
        })
        if(!course) return new NextResponse("Not Found", {status: 404});

        const unpublishedSubject = await db.subject.update({
            where: {
                subjectId: params.subjectId
            },data: {
                isActive: false
            }
        })
        return NextResponse.json(unpublishedSubject);
    } catch (error) {
        console.log("[SUBJECT_ID_INACTIVE]", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}