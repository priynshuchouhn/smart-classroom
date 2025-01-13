import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const CourseIdPage = async ({
  params
}: {
  params: { moduleId: string; }
}) => {
  const module = await db.module.findUnique({
    where: {
      moduleId: params.moduleId,
    },
  });
  if (!module) {
    return redirect("/dashboard");
  }

  return redirect(`/modules/${module.moduleId}/content`);
}
 
export default CourseIdPage;