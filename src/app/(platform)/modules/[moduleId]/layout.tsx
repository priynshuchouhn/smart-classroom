import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import getSafeProfile from "@/actions/get-safe-profile";

const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { moduleId: string };
}) => {
  const { userId } = {userId: "Hello world"};
  if (!userId) {
    return redirect("/")
  }
  const safeProfile = await getSafeProfile();
  if (!safeProfile) {
    return redirect("/dashboard");
  }

  const modules = await db.module.findUnique({
    where: {
      moduleId: params.moduleId,
    },
  });


  if (!modules) {
    return redirect("/dashboard");
  }

  return (

      <main className="h-full">
        {children}
      </main>

  )
}

export default CourseLayout