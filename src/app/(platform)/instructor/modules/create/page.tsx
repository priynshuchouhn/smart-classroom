'use client';
import React from 'react';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required'
    }),
})


function CreateModule() {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    })
    const { isSubmitting, isValid } = form.formState;
    const onSumbit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post('/api/modules',values);
            router.push(`/instructor/modules/${response.data.moduleId}`)
            toast.success("Module Created")
        } catch (error) {
            toast.error('Something went wrong')
        }
    }
    return (
        <div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6'>
            <div>
                <h1 className='text-2xl'>
                    Name of your Module
                </h1>
                <p className='text-sm text-slate-600'>What would you like to name the your module? Don&apos;t worry, you can change it later</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSumbit)} className='space-y-8 mt-8'>
                        <FormField control={form.control} name='title' render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Module Title
                                </FormLabel>
                                <FormControl>
                                    <Input disabled={isSubmitting} placeholder='e.g. Advanced Web Development' {...field} />
                                </FormControl>
                                <FormDescription>
                                    What will you teach in this module?
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )} />
                        <div className='flex items-center gap-x-2'>
                            <Link href="/">
                            <Button type='button' variant={'ghost'}>Cancel</Button>
                            </Link>
                            <Button type='submit' disabled={!isValid || isSubmitting}>Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CreateModule
