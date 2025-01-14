import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
    req: Request, { params }: { params: { moduleId: string } }
) {
    try {
        //TODO: change user id, replace
        const { userId } = { userId: "Hello world" }
        const { url, name } = await req.json();


        if (!userId) return new NextResponse("Unauthorised", { status: 401 });

        const modules = await db.module.findUnique({
            where: {
                moduleId: params.moduleId,
            }
        })

        if (!modules) {
            return new NextResponse("Unauthorised", { status: 401 })
        }

        const studentSubmission = await db.studentAttachment.create({
            data: {
                url,
                name: name,
                studentId: userId,
                moduleId: params.moduleId
            }
        })
        return NextResponse.json(studentSubmission)
    } catch (error) {
        console.log("[MODULE_ID_ASSIGNMENT_SUBMIT]", error);
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}