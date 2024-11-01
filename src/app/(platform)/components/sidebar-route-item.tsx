'use client'
import { ISidebarRoutes } from '@/lib/interfaces'
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

interface SidebarRouteItemProps extends ISidebarRoutes {}

function SidebarRouteItem({icon: Icon, path, title,}: SidebarRouteItemProps ) {
    const pathName = usePathname();
    const router = useRouter()
    const isActive = (pathName === '/' && path == '/' || pathName === path || pathName.startsWith(`${path}/`));
    const onClick = () => {
        router.push(path)
    }
  return (
    <button onClick={onClick} className={cn('flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20', isActive && 'text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700')}>
     <div className='flex items-center gap-x-2 py-4'>
        <Icon size={22} className={cn('text-slate-500', isActive && 'text-sky-700')}/>
        {title}
     </div>
     <div className={cn('ml-auto opacity-0 border-2 border-sky-700 h-full transition-all', isActive && 'opacity-100')}>

     </div>
    </button>
  )
}

export default SidebarRouteItem
