import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'
import { Course } from '@prisma/client'
import { db } from '@/lib/db'

async function getData(): Promise<Course[]> {
  const {user_id} = {user_id : "Hello world"}
  try {
    const courses = await db.course.findMany({
      where:{
        user_id: user_id
      },
      orderBy:{
        createdAt: "desc"
      },include: {
        subject:{}
      }
    })
    return courses
  } catch (error) {
    console.log("[GET_DATA]", error);
    return [];
  }

}

async function CoursePage() {
  const data = await getData();
  return (
    <div className='p-6'>
      <Link href={'/instructor/courses/create'}>
        <Button>
          New Course
        </Button>
      </Link>
      <div className="py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default CoursePage
