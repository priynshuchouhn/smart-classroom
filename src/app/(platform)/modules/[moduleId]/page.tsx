import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const CourseIdPage = async ({
  params
}: {
  params: { moduleId: string; }
}) => {
  const moduleData = await db.module.findUnique({
    where: {
      moduleId: params.moduleId,
    },
  });
  if (!moduleData) {
    return redirect("/dashboard");
  }

  return redirect(`/modules/${moduleData.moduleId}/content`);
}
 
export default CourseIdPage;