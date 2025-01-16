import { NextResponse } from "next/server";
import { db } from '@/lib/db';
import { ModuleWithProgressWithSubject } from "@/types";

export async function POST(req: Request) {
    try {
        // TODO: Add User Id here, if using clerk
        const { userId } = { userId: "Hello world" }
        const { title } = await req.json();
        if (!userId) return new NextResponse("Unauthorised", { status: 401 });
        const course = await db.module.create({
            data: {
                userId,
                title
            }
        });
        return NextResponse.json(course);
    } catch (error) {
        console.log('[Modules]', error);
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}


export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");
        const title = searchParams.get("title");
        const subjectId = searchParams.get("subjectId");

        if (!userId) {
            return new Response(JSON.stringify({ error: "UserId is required" }), { status: 400 });
        }

        console.log("[Module Fetch Function Called]")
        const modules = await db.module.findMany({
            where: {
                isPublished: true,
            },
            include: {
                subject: true,
            },
            orderBy: {
                createdAt: "desc",
            }
        });
        const moduleWithProgress: ModuleWithProgressWithSubject[] = await Promise.all(
            modules.map(async (module) => {
                return {
                    ...module,
                };
            })
        );

        return new Response(JSON.stringify(moduleWithProgress), { status: 200 });
    } catch (error) {
        console.error("[API ERROR]", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
