'use client'
import React from 'react'
import { Home, School } from 'lucide-react'
import { ISidebarRoutes } from '@/lib/interfaces';
import SidebarRouteItem from './sidebar-route-item';

const adminRoutes: ISidebarRoutes[] = [];
const instructorRoutes: ISidebarRoutes[] = [];
const studentRoutes: ISidebarRoutes[] = [
    {
        icon: Home,
        title: 'Home',
        path: '/dashboard'
    },
    {
        icon: School,
        title: 'Classroom',
        path: '/class'
    }
];




function SidebarRoutes() {
    const routes = studentRoutes
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
