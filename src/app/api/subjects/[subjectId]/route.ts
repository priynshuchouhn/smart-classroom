import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    { params }: { params: { subjectId: string } }
) {
    try {
        const {subjectId} = params;
        const values = await req.json();

        const subject = await db.subject.update({
            where: {
                subjectId: subjectId,
            },data: {
                ...values
            }
        })
        return NextResponse.json(subject);
    } catch (error) {
        console.log("[SubjectId]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { subjectId: string } }
){
    try {
        
        const subject = await db.subject.findUnique({
            where: {
                subjectId: params.subjectId,
            },
        })
        if(!subject) return new NextResponse("Not Found", {status: 404});
        const deletedSubject = await db.subject.delete({
            where: {
                subjectId: params.subjectId
            }
        })
        return NextResponse.json(deletedSubject);
    } catch (error) {
        console.log("[SUBJECT_ID_DELETE]", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}