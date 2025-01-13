import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
    req: Request, { params }: { params: { moduleId: string } }
) {
    try {
        //TODO: change user id, replace
        const { userId } = { userId: "Hello world" }
        const { url, name } = await req.json();


        if(!userId) return new NextResponse("Unauthorised", {status: 401});

        const courseOwner = await db.module.findUnique({
            where: {
                moduleId: params.moduleId,
            }
        })

        if(!courseOwner){
            return new NextResponse("Unauthorised", {status: 401})
        }

        const attachments = await db.assignment.create({
          data:{
            url,
            name: name,
            moduleId: params.moduleId
          }  
        })
        return NextResponse.json(attachments)
    } catch (error) {
        console.log("[MODULE_ID_ASSIGNMENT]", error);
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}