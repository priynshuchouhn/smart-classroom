import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'
import { Module, Subject } from '@prisma/client'
import { db } from '@/lib/db'


async function getData(): Promise<any> {
    const { userId } = { userId: "Hello world" }
    try {
        const subjects = await db.subject.findMany({
            where: {},
            orderBy: {
                createdAt: "desc"
            }, include: {
                modules: {
                    select: {
                        moduleId: true
                    }
                }
            }
        })
        return subjects
    } catch (error) {
        console.log("[GET_DATA]", error);
        return [];
    }

}

async function ModulePage() {
    const data = await getData();
    return (
        <div className='p-6'>
            <Link href={'/instructor/subjects/create'}>
                <Button>
                    New Subject
                </Button>
            </Link>
            <div className="py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default ModulePage
