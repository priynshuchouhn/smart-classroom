import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    {params}: {params : {moduleId: string, attachmentId: string}}
){
    try {
        //Todo: replace this 
        const {userId} = {userId: "Hello world"}
    
        if(!userId) return new NextResponse("Unauthorised...", {status: 401});
        if (!params.moduleId || !params.attachmentId) {
            return new NextResponse("Invalid request parameters", { status: 400 });
          }

        const courseOwner = await db.module.findUnique({
            where: {
                moduleId: params.moduleId,
                userId: userId
            }
        })

        if(!courseOwner) return new NextResponse("Unauthorised", {status: 401});
        const attachment = await db.attachment.delete({
            where: {
                moduleId: params.moduleId,
                attachmentId: params.attachmentId
            }
        })
        return NextResponse.json(attachment);
    } catch (error) {
        console.log("[Attachment_Id]", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }


}