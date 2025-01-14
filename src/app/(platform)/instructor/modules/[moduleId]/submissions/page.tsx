import React from 'react'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'
import { Module, StudentAttachment } from '@prisma/client'
import { db } from '@/lib/db'

async function getData(moduleId: string): Promise<{studentSubmission: StudentAttachment[], moduleData: Module | null}> {
    try {
        const studentSubmission = await db.studentAttachment.findMany({
            where: {
                moduleId: moduleId
            },include:{
                module: {},
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        const moduleData = await db.module.findUnique({
            where: {
                moduleId: moduleId
            }
        })
        return {studentSubmission, moduleData}
    } catch (error) {
        console.log("[GET_DATA]", error);
        return {studentSubmission : [], moduleData: null};
    }

}

async function Submissions({ params }: { params: { moduleId: string } }) {
    const {studentSubmission, moduleData} = await getData(params.moduleId);
    return (
        <div className='p-6'>
            <h1 className='text-2xl font-semibold'>Students Submission</h1>
            <p className='text-muted-foreground'>{moduleData?.title}</p>
            <div className="py-10">
                <DataTable columns={columns} data={studentSubmission} />
            </div>
        </div>
    )
}

export default Submissions
