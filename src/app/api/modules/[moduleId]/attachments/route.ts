import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
    req: Request, { params }: { params: { moduleId: string } }
) {
    try {
        //TODO: change user id, replace
        const { userId } = { userId: "Hello world" }
        const { url } = await req.json();

        if(!userId) return new NextResponse("Unauthorised", {status: 401});

        const courseOwner = await db.module.findUnique({
            where: {
                moduleId: params.moduleId,
                userId: userId
            }
        })

        if(!courseOwner){
            return new NextResponse("Unauthorised", {status: 401})
        }

        const attachments = await db.attachment.create({
          data:{
            url,
            name: url.split("/").pop(),
            moduleId: params.moduleId
          }  
        })
        return NextResponse.json(attachments)
    } catch (error) {
        console.log("[MODULE_ID_ATTACHMENTS]", error);
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}