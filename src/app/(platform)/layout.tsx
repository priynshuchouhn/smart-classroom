import React from 'react'
import Sidebar from './components/sidebar'
import Header from './components/header';
import ClassroomClock from './components/clock';

function DashboardLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-full'>
      <div className='fixed md:pl-56 h-[80px] inset-y-0 w-full z-50'>
        <Header />
      </div>
      <div className='hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50'>
        <Sidebar />
      </div>
      <main className='md:pl-56 pt-[80px] h-screen'>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
