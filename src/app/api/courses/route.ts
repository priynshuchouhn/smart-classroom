import { NextResponse } from "next/server";
import {db} from '@/lib/db';

export async function POST(req: Request){
try {
    // TODO: Add User Id here, if using clerk
    const {user_id} = {user_id:"Hello world"}
    const {title} = await req.json();
    if(!user_id) return new NextResponse("Unauthorised", {status: 401});
    const course = await db.course.create({
        data:{
            user_id,
            title
        }
    });
    return NextResponse.json(course);
} catch (error) {
    console.log('[Courses]', error);
    return new NextResponse('Internal Server Error', {status: 500})
}
}