'use client'

import ConfirmModal from '@/components/modals/confirm-modal'
import { Button } from '@/components/ui/button'
import { useConfettiStore } from '@/hooks/use-confetti-store'
import axios from 'axios'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

interface ActionsProps {
    disabled: boolean,
    subjectId: string
    isActive: boolean
}

function Actions({
    disabled,
    subjectId,
    isActive
}: ActionsProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const confetti = useConfettiStore();

    const onClick = async () => {
        try {
            setIsLoading(true);

            if(isActive){
                await axios.patch(`/api/subjects/${subjectId}/inactive`);
                toast.success('Subject is inactive');
                router.refresh()
            }else{
                await axios.patch(`/api/subjects/${subjectId}/active`);
                toast.success('Subject is active');
                confetti.onOpen();
                router.refresh()
            }
        } catch (error) {
            toast.error("Something went wrong");
        }finally{
            setIsLoading(false)
        }
    }

    const onDelete = async () => {
        try {
            setIsLoading(true);
            await axios.delete(`/api/subjects/${subjectId}/`);
            toast.success("Course deleted");
            router.refresh()
            router.push(`/instructor/subjects`);
        } catch (error) {
            toast.error("Something went wrong");
        } finally{
            setIsLoading(false);
        }
    }
    return (
        <div className='flex items-center gap-x-2'>
            <Button
                onClick={onClick}
                disabled={disabled || isLoading}
                variant={"outline"}
                size={"sm"}
            >
                {isActive ? "Inactive" : "Active"}
            </Button>
            <ConfirmModal
                onConfirm={onDelete}
            >
                <Button size={'sm'} disabled={isLoading}>
                    <Trash className='h-4 w-4' />
                </Button>
            </ConfirmModal>
        </div>
    )
}

export default Actions
