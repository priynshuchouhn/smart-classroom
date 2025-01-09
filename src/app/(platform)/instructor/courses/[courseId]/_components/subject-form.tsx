'use client'

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Combobox } from '@/components/ui/combo-box';
import { Course } from '@prisma/client';

interface SubjectFormProps {
    initialData: Course,
    options: {label:string, value:string}[]
    courseId: string
}

const formSchema = z.object({
    subject_id: z.string().min(1, {
        message: "Subject is required",
    })
})

function SubjectForm({ initialData, options, courseId }: SubjectFormProps) {
    const selectedOption = options.find(el => el.value === initialData.subject_id)

    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((current) => !current);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject_id: initialData.subject_id || ""
        }
    })
    const router = useRouter();
    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        try {
            await axios.patch(`/api/courses/${courseId}`, values);
            toast.success("Course updated");
            toggleEdit();
            router.refresh();
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between' >
                Course Subject
                <Button onClick={toggleEdit} variant={"ghost"}>
                    {isEditing ? (<>Cancel</>) :
                        (<>
                            <Pencil className='h-4 w-4 mr-2' />
                            Edit Subject
                        </>)}
                </Button>
            </div>
            {!isEditing && (
                <p className={cn('text-sm mt-2', !initialData.subject_id && "text-slate-500 italic")}>
                    {selectedOption?.label || "No Subject"}
                </p>
            )}
            {isEditing && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 mt-4'>
                        <FormField control={form.control} name="subject_id" render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Combobox options={options} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <div className='flex items-center gap-x-2'>
                            <Button disabled={!isValid || isSubmitting} type='submit'>
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            )}
        </div>
    )
}

export default SubjectForm
