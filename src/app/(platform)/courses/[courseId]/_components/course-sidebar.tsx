import {  Course,  } from "@prisma/client"
import { redirect } from "next/navigation";



interface CourseSidebarProps {
  course: Course 
};

export const CourseSidebar = async ({
  course,
}: CourseSidebarProps) => {
  const { user_id } = {user_id: "Hello world"}

  if (!user_id) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto border-r shadow-sm">
      <div className="flex flex-col p-8 border-b">
        <h1 className="font-semibold">
          {course.title}
        </h1>
      </div>
    </div>
  )
}