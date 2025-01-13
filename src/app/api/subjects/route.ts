import { NextResponse } from "next/server";
import {db} from '@/lib/db';

export async function POST(req: Request){
try {
    const {name} = await req.json();
    const subject = await db.subject.create({
        data:{
            name,
        }
    });
    return NextResponse.json(subject);
} catch (error) {
    console.log('[Subjects]', error);
    return new NextResponse('Internal Server Error', {status: 500})
}
}