import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const CourseIdPage = async ({
  params
}: {
  params: { courseId: string; }
}) => {
  const course = await db.course.findUnique({
    where: {
      course_id: params.courseId,
    },
  });

  if (!course) {
    return redirect("/dashboard");
  }

  return redirect(`/courses/${course.course_id}/content`);
}
 
export default CourseIdPage;