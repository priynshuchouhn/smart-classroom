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
import { Attachment, Course } from '@prisma/client';
import FileUpload from '@/components/ui/file-upload';

interface AttachmentFormProps {
    initialData: Course & {attachments : Attachment[]}
    courseId: string
}

const formSchema = z.object({
    url: z.string().min(1)
})
function AttachmentForm({ initialData, courseId }: AttachmentFormProps) {

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
            await axios.post(`/api/courses/${courseId}/attachments`, values);
            toast.success("Course updated");
            toggleEdit();
            router.refresh();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong@")
        }
    }

    const onDelete = async (id:string) => {
        try {
            setDeleteingId(id);
            await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
            toast.success("Attachment Created");
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
                Course Attachments
                <Button onClick={toggleEdit} variant={"ghost"}>
                    {isEditing && (<>Cancel</>)}
                    {!isEditing &&  (
                        <>
                            <PlusCircle className='h-4 w-4 mr-2' />
                            Add a File
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <>
                    {initialData.attachments.length === 0 && (
                        <p className='text-sm mt-2 text-slate-500 italic'>
                            No attachments yet
                        </p>
                    )} 
                    {initialData.attachments.length > 0 && (
                        <div className="space-y-2">
                            {initialData.attachments.map((attachment)=> 
                            <div key={attachment.attachment_id} className='flex items-center p-3 w-full bg-sky-100 border border-sky-200 text-sky-700 rounded-md'>
                                <File className='h-4 w-4 mr-2 flex-shrink-0'/>
                                <p className='text-xs line-clamp-1'> 
                                    {attachment.name}
                                </p>
                                {deletingId === attachment.attachment_id && (
                                    <div className='ml-auto'>
                                        <Loader2 className='h-4 w-4 animate-spin'/>
                                    </div>
                                )}
                                {deletingId !== attachment.attachment_id && (
                                    <button className='ml-auto hover:opacity-75 transition' onClick={()=> onDelete(attachment.attachment_id)}>
                                        <X className='h-4 w-4'/>
                                    </button>
                                )}
                            </div>
                            )}
                        </div>
                    )}
                </>
            )}
            {isEditing && (
               <div>
                    <FileUpload 
                        endpoint='courseAttachment'
                        onChange={(url)=> {
                            if(url) {
                                onSubmit({url: url})
                            }
                        }}
                    />
                    <div className='text-xs text-muted-foreground mt-4'>
                        Add anything your students might need to complete the course.
                    </div>
               </div> 
            )}
        </div>
    )
}

export default AttachmentForm
