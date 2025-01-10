import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { getProgress } from "@/actions/get-progress";

import { CourseSidebar } from "./_components/course-sidebar";
import { CourseNavbar } from "./_components/course-navbar";
import getSafeProfile from "@/actions/get-safe-profile";

const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  const { user_id } = {user_id: "Hello world"};
  if (!user_id) {
    return redirect("/")
  }
  const safeProfile = await getSafeProfile();
  if (!safeProfile) {
    return redirect("/dashboard");
  }

  const course = await db.course.findUnique({
    where: {
      course_id: params.courseId,
    },
  });

  if (!course) {
    return redirect("/dashboard");
  }

  return (

      <main className="h-full">
        {children}
      </main>

  )
}

export default CourseLayout