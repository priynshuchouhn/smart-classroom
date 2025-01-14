'use client'

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { File, Loader2, PlusCircle, X } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { StudentAttachment } from '@prisma/client';
import FileUpload from '@/components/ui/file-upload';

interface StudentSubmissionFormProps {
    initialData: StudentAttachment | null
    moduleId: string
}

const formSchema = z.object({
    url: z.string().min(1),
    name: z.string().min(1)
})
function StudentSubmissionForm({ initialData, moduleId }: StudentSubmissionFormProps) {

    const [isEditing, setIsEditing] = useState(false);
    const [deletingId,setDeleteingId] = useState<string | null>(null);
    const toggleEdit = () => setIsEditing((current) => !current);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    const router = useRouter();
    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/modules/${moduleId}/assignment/submission`, values);
            toast.success("Assignment submitted");
            toggleEdit();
            router.refresh();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }

    const onDelete = async (id:string) => {
        try {
            setDeleteingId(id);
            await axios.delete(`/api/modules/${moduleId}/assignment/submission/${id}`);
            toast.success("Assignment unsubmitted");
            router.refresh();
        } catch (error) {
            toast.error("Something went wrong...")
        }finally{
            setDeleteingId(null)
        }
    }

    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between' >
                Add your work
                <Button onClick={toggleEdit} variant={"ghost"}>
                    {isEditing && (<>Cancel</>)}
                    {!isEditing && !initialData && (
                        <>
                            <PlusCircle className='h-4 w-4 mr-2' />
                            Add a File
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <>
                    {!initialData && (
                        <p className='text-sm mt-2 text-slate-500 italic'>
                            No Submissions yet, upload your work
                        </p>
                    )} 
                    {initialData && (
                        <div className="space-y-2">
                            <div key={initialData.submissionId} className='flex items-center p-3 w-full bg-sky-100 border border-sky-200 text-sky-700 rounded-md'>
                                <File className='h-4 w-4 mr-2 flex-shrink-0'/>
                                <p className='text-xs line-clamp-1'> 
                                    {initialData.name}
                                </p>
                                {deletingId === initialData.submissionId && (
                                    <div className='ml-auto'>
                                        <Loader2 className='h-4 w-4 animate-spin'/>
                                    </div>
                                )}
                                {deletingId !== initialData.submissionId && (
                                    <button className='ml-auto hover:opacity-75 transition' onClick={()=> onDelete(initialData.submissionId)}>
                                        <X className='h-4 w-4'/>
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </>
            )}
            {isEditing && (
               <div>
                    <FileUpload 
                        endpoint='studentSubmission'
                        onChange={(data)=> {
                            if(data) {
                                onSubmit({url: data.url, name: data.name})
                            }
                        }}
                    />
               </div> 
            )}
        </div>
    )
}

export default StudentSubmissionForm
