import { NextResponse } from "next/server";
import {db} from '@/lib/db';

export async function POST(req: Request){
try {
    // TODO: Add User Id here, if using clerk
    const {userId} = {userId:"Hello world"}
    const {title} = await req.json();
    if(!userId) return new NextResponse("Unauthorised", {status: 401});
    const course = await db.module.create({
        data:{
            userId,
            title
        }
    });
    return NextResponse.json(course);
} catch (error) {
    console.log('[Modules]', error);
    return new NextResponse('Internal Server Error', {status: 500})
}
}