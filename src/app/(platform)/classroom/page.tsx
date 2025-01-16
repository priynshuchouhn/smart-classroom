import { getDashboardModules } from '@/actions/get-courses';
import { ModulesList } from '@/components/ui/modules-list';
import React from 'react'

async function Page() {
  const { userId } = { userId: "Hello world" };
  const modules = await getDashboardModules({
    userId,
  });
  return (
    <>
      <div className="p-6 space-y-4">
        <ModulesList items={modules} />
      </div>
    </>
  );
}

export default Page
