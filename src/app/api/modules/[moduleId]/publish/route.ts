import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    {params} : {params: {moduleId: string}}
){
    try {
        const {user_id} = {user_id: "Hello world"}
        if(!user_id) return new NextResponse("Unauthorised", {status: 401});
        const modules = await db.module.findUnique({
            where: {
                moduleId: params.moduleId
            }
        })
        if(!modules) return new NextResponse("Not Found", {status: 404});

        if(!modules.title || !modules.subjectId) return new NextResponse("Missing fields", {status: 400});

        const publishedModule = await db.module.update({
            where: {
                moduleId: params.moduleId
            },data: {
                isPublished: true
            }
        })
        return NextResponse.json(publishedModule);
    } catch (error) {
        console.log("[MODULE_ID_PUBLISH]", error)
    }
}