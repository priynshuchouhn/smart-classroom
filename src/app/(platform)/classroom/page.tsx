'use client'
import { getDashboardModules } from '@/actions/get-courses';
import { ModulesList } from '@/components/ui/modules-list';
import { ModuleWithProgressWithSubject } from '@/types';
import React, { useEffect, useState } from 'react'

function Page() {
  const { userId } = { userId: "Hello world" };
  const [modules, setModules] = useState<ModuleWithProgressWithSubject[]>([]);
  useEffect(()=>{
    async function fetchModules(){
      const modulesWithSubject = await getDashboardModules({
        userId,
      });
      console.log("[Modules Fetched]", modulesWithSubject);
      setModules(modulesWithSubject)
    }
    fetchModules();
  },[userId])
  console.log(modules)
  return (
    <>
      <div className="p-6 space-y-4">
        <ModulesList items={modules} />
      </div>
    </>
  );
}

export default Page
