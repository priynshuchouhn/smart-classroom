import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'
import { Module } from '@prisma/client'
import { db } from '@/lib/db'

async function getData(): Promise<Module[]> {
  const {userId} = {userId : "Hello world"}
  try {
    const courses = await db.module.findMany({
      where:{
        userId: userId
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

async function ModulePage() {
  const data = await getData();
  return (
    <div className='p-6'>
      <Link href={'/instructor/modules/create'}>
        <Button>
          New Module
        </Button>
      </Link>
      <div className="py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default ModulePage
