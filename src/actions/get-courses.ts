
import { db } from "@/lib/db";
import { ModuleWithProgressWithSubject } from "@/types";


type GetCourses = {
  user_id: string;
  title?: string;
  subjectId?: string;
};

export const getCourses = async ({
  user_id,
  title,
  subjectId
}: GetCourses): Promise<ModuleWithProgressWithSubject[]> => {
  try {
    const modules = await db.module.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
          mode: "insensitive",
        },
        subjectId,
      },
      include: {
        subject: true,
      },
      orderBy: {
        createdAt: "desc",
      }
    });

    const moduleWithProgress: ModuleWithProgressWithSubject[] = await Promise.all(
      modules.map(async (module) => {
        return {
          ...module,
        };
      })
    );

    return moduleWithProgress;
  } catch (error) {
    console.log("[GET_MODULE]", error);
    return [];
  }
}