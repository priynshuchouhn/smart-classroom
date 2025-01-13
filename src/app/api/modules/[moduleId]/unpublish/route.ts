import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    {params} : {params: {moduleId: string}}
){
    try {
        const {user_id} = {user_id: "Hello world"}
        if(!user_id) return new NextResponse("Unauthorised", {status: 401});
        const course = await db.module.findUnique({
            where: {
                moduleId: params.moduleId
            }
        })
        if(!course) return new NextResponse("Not Found", {status: 404});

        const unpublishedModule = await db.module.update({
            where: {
                moduleId: params.moduleId
            },data: {
                isPublished: false
            }
        })
        return NextResponse.json(unpublishedModule);
    } catch (error) {
        console.log("[MODULE_ID_UNPUBLISH]", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}