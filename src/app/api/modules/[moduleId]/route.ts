import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    { params }: { params: { moduleId: string } }
) {
    try {
        // TODO: Add User Id here, if using clerk
        const { userId } = { userId: "Hello world" }
        const {moduleId} = params;
        const values = await req.json();
        if(!userId) return new NextResponse("Unauthorised", {status: 401});

        const course = await db.module.update({
            where: {
                moduleId: moduleId,
                userId
            },data: {
                ...values
            }
        })
        return NextResponse.json(course);
    } catch (error) {
        console.log("[ModuleId]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { moduleId: string } }
){
    try {
        const {userId} = {userId : "Hello world"};
        if(!userId) return new NextResponse("Unauthorised", {status: 401});

        const course = await db.module.findUnique({
            where: {
                moduleId: params.moduleId,
                userId: userId
            },
        })
        if(!course) return new NextResponse("Not Found", {status: 404});
        const deletedModule = await db.module.delete({
            where: {
                moduleId: params.moduleId
            }
        })
        return NextResponse.json(deletedModule);
    } catch (error) {
        console.log("[COURSE_ID_DELETE]", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}