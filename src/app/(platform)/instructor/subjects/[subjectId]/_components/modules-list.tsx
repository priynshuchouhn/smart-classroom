import { Module } from '@prisma/client'
import { File } from 'lucide-react'
import React from 'react'

interface ModuleListProps {
    initialData: Module[]
}
function ModuleList({
    initialData
}: ModuleListProps) {
    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between' >
                Module Details
            </div>
            <>
                {initialData.length === 0 && (
                    <p className='text-sm mt-2 text-slate-500 italic'>
                        No modules yet
                    </p>
                )}
                {initialData.length > 0 && (
                    <div className="space-y-2">
                        {initialData.map((module) =>
                            <div key={module.moduleId} className='flex items-center p-3 w-full bg-sky-100 border border-sky-200 text-sky-700 rounded-md'>
                                <File className='h-4 w-4 mr-2 flex-shrink-0' />
                                <p className='text-xs line-clamp-1'>
                                    {module.title}
                                </p>
                                {/* {deletingId === attachment.attachmentId && (
                                    <div className='ml-auto'>
                                        <Loader2 className='h-4 w-4 animate-spin' />
                                    </div>
                                )}
                                {deletingId !== attachment.attachmentId && (
                                    <button className='ml-auto hover:opacity-75 transition' onClick={() => onDelete(attachment.attachmentId)}>
                                        <X className='h-4 w-4' />
                                    </button>
                                )} */}
                            </div>
                        )}
                    </div>
                )}
            </>
        </div>
    )
}

export default ModuleList
