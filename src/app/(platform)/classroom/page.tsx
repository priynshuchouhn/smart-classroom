import { getCourses } from '@/actions/get-courses';
import { CoursesList } from '@/components/ui/modules-list';
import React from 'react'

async function Page() {
    const {user_id } = {user_id: "Hello world"};
    const courses = await getCourses({
        user_id,
      });
    
      return (
        <>
          <div className="p-6 space-y-4">
            <CoursesList items={courses} />
          </div>
        </>
      );
}

export default Page
