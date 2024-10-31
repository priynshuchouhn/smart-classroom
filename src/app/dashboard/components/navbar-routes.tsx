'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function NavbarRoutes() {
  const pathname = usePathname();
  const router = useRouter();

  const isInstructorPage = pathname.startsWith('/instructor');
  const isPlayerPage = pathname.startsWith('/chapter');
  return (
    <div className='flex gap-x-2 ml-auto'>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SMC</AvatarFallback>
      </Avatar>

    </div>
  )
}

export default NavbarRoutes
