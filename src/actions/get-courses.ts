import { db } from "@/lib/db";
import { ModuleWithProgressWithSubject } from "@/types";
import axios from "axios";


type GetDashbaordModule = {
  userId: string;
  title?: string;
  subjectId?: string;
};

export const getDashboardModules = async ({
  userId,
  title,
  subjectId
}: GetDashbaordModule): Promise<ModuleWithProgressWithSubject[]> => {
  try {
    const modules = await db.module.findMany({
      where: {
        isPublished: true,
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
    console.log(modules);
    return moduleWithProgress
  } catch (error) {
    console.log("[GET_MODULE]", error);
    return [];
  }
}