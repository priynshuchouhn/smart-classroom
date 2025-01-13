'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function NavbarRoutes() {
  const pathname = usePathname();
  const router = useRouter();

  const isInstructorPage = pathname.startsWith('/instructor');
  const isPlayerPage = pathname.startsWith('/chapter');
  return (
    <div className='flex gap-x-2 ml-auto'>
      {isInstructorPage || isPlayerPage ? (
        <Link href="/dashboard">
        <Button>
          <LogOut className='h-4 w-4 mr-4'/>
          Exit
        </Button>
        </Link>
      ): <Link href="/instructor/modules">
        <Button size={'sm'} variant={'ghost'}>
          Instructor Mode
        </Button>
      </Link> }
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SMC</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default NavbarRoutes
