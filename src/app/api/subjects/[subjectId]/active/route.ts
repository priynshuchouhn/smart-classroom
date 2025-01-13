import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    {params} : {params: {subjectId: string}}
){
    try {
        
        const modules = await db.subject.findUnique({
            where: {
                subjectId: params.subjectId
            }
        })
        if(!modules) return new NextResponse("Not Found", {status: 404});

        if(!modules.name) return new NextResponse("Missing fields", {status: 400});

        const publishedSubject = await db.subject.update({
            where: {
                subjectId: params.subjectId
            },data: {
                isActive: true
            }
        })
        return NextResponse.json(publishedSubject);
    } catch (error) {
        console.log("[SUBJECT_ID_ACTIVE]", error)
    }
}