'use client'
import React from 'react'
import { BarChart, Home, List, School } from 'lucide-react'
import { ISidebarRoutes } from '@/lib/interfaces';
import SidebarRouteItem from './sidebar-route-item';
import { usePathname } from 'next/navigation';

const adminRoutes: ISidebarRoutes[] = [];
const instructorRoutes: ISidebarRoutes[] = [
    {
        icon: List,
        title: 'Modules',
        path: '/instructor/modules'
    },
    {
        icon: BarChart,
        title: 'Analytics',
        path: '/instructor/analytics'
    }
];
const studentRoutes: ISidebarRoutes[] = [
    {
        icon: Home,
        title: 'Home',
        path: '/dashboard'
    },
    {
        icon: School,
        title: 'Classroom',
        path: '/classroom'
    }
];




function SidebarRoutes() {
    const pathname = usePathname();
    const isInstructor = pathname?.startsWith('/instructor');
    const routes = isInstructor ? instructorRoutes :studentRoutes
    return (
        <div className='flex flex-col w-full'>
            {routes.map((route)=> (
                <SidebarRouteItem
                    key={route.path}
                    icon={route.icon}
                    path={route.path}
                    title={route.title}
                />
            ))}
        </div>
    )
}

export default SidebarRoutes
