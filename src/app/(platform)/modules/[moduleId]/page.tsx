import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const CourseIdPage = async ({
  params
}: {
  params: { moduleId: string; }
}) => {
  const course = await db.module.findUnique({
    where: {
      moduleId: params.moduleId,
    },
  });

  if (!course) {
    return redirect("/dashboard");
  }

  return redirect(`/modules/${course.moduleId}/content`);
}
 
export default CourseIdPage;