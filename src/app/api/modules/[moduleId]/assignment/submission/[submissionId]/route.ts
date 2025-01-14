import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    {params}: {params : {moduleId: string, submissionId: string}}
){
    try {
        //Todo: replace this 
        const {userId} = {userId: "Hello world"}
    
        if(!userId) return new NextResponse("Unauthorised...", {status: 401});
        if (!params.moduleId || !params.submissionId) {
            return new NextResponse("Invalid request parameters", { status: 400 });
          }

        const modules = await db.module.findUnique({
            where: {
                moduleId: params.moduleId,
            }
        })

        if(!modules) return new NextResponse("Unauthorised", {status: 401});
        const deleteSubmission = await db.studentAttachment.delete({
            where: {
                moduleId: params.moduleId,
                submissionId: params.submissionId,
                studentId: userId
            }
        })
        return NextResponse.json(deleteSubmission);
    } catch (error) {
        console.log("[Submission_Id]", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }


}