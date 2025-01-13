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

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface NameFormProps {
    initialData: {
        name: string,
    }
    subjectId: string
}

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    })
})
function NameForm({ initialData, subjectId }: NameFormProps) {

    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((current) => !current);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    })
    const router = useRouter();
    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        try {
            await axios.patch(`/api/subjects/${subjectId}`, values);
            toast.success("Subject updated");
            toggleEdit();
            router.refresh();
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between' >
                Subject Name
                <Button onClick={toggleEdit} variant={"ghost"}>
                    {isEditing ? (<>Cancel</>) :
                        (<>
                            <Pencil className='h-4 w-4 mr-2' />
                            Edit Title
                        </>)}
                </Button>
            </div>
            {!isEditing && (
                <p className='text-sm mt-2'>
                    {initialData.name}
                </p>
            )}
            {isEditing && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 mt-4'>
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input disabled={isSubmitting}
                                        placeholder='e.g. Advanced Web Technology'
                                        {...field}
                                    />
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

export default NameForm
