import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    {params}: {params : {moduleId: string, assignmentId: string}}
){
    try {
        //Todo: replace this 
        const {userId} = {userId: "Hello world"}
    
        if(!userId) return new NextResponse("Unauthorised...", {status: 401});
        if (!params.moduleId || !params.assignmentId) {
            return new NextResponse("Invalid request parameters", { status: 400 });
          }

        const courseOwner = await db.module.findUnique({
            where: {
                moduleId: params.moduleId,
                userId: userId
            }
        })

        if(!courseOwner) return new NextResponse("Unauthorised", {status: 401});
        const attachment = await db.assignment.delete({
            where: {
                moduleId: params.moduleId,
                assignmentId: params.assignmentId
            }
        })
        return NextResponse.json(attachment);
    } catch (error) {
        console.log("[Assignment_Id]", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }


}