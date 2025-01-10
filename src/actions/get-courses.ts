import { Subject, Course } from "@prisma/client";

import { db } from "@/lib/db";
import { CourseWithProgressWithSubject } from "@/types";


type GetCourses = {
  user_id: string;
  title?: string;
  subject_id?: string;
};

export const getCourses = async ({
  user_id,
  title,
  subject_id
}: GetCourses): Promise<CourseWithProgressWithSubject[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
                    contains: title,
                    mode: "insensitive",
        },
        subject_id,
      },
      include: {
        subject: true,
      },
      orderBy: {
        createdAt: "desc",
      }
    });
    
    const coursesWithProgress: CourseWithProgressWithSubject[] = await Promise.all(
      courses.map(async (course) => {
        return {
          ...course,
        };
      })
    );

    return coursesWithProgress;
  } catch (error) {
    console.log("[GET_COURSES]", error);
    return [];
  }
}