import { StudentAttachment } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface StudentSubmissionListProps {
    studentSubmissions: StudentAttachment[],
    moduleId: string
}

function StudentSubmissionList({
    studentSubmissions,
    moduleId
}: StudentSubmissionListProps) {
    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between' >
                Student Submissions
                {studentSubmissions.length > 0 && (<Link className='text-sm text-sky-700' href={`${moduleId}/submissions`}>View All Submission</Link>)}
            </div>
            {studentSubmissions.length == 0 && (
                <div className='mt-3'>
                    <p className='italic text-sm text-muted-foreground'>No Submissions yet</p>
                </div>
            )}
            {studentSubmissions.length > 0 && (
                <div className='mt-3'>
                   <b>{studentSubmissions.length}</b> student
                   {studentSubmissions.length > 1 ? 's' : ''} submitted assignment
                </div>
            )}
        </div>
    )
}

export default StudentSubmissionList
