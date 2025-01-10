/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Subject, Course } from "@prisma/client";

import { CourseCard } from "@/components/ui/course-card";

import { CourseWithProgressWithSubject } from "@/types";

interface CoursesListProps {
    items: CourseWithProgressWithSubject[];
}

export const CoursesList = ({
    items
}: CoursesListProps) => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {items.map((item) => (
                    <CourseCard
                        key={item.course_id}
                        id={item.course_id}
                        title={item.title}
                        subject={item?.subject?.name!}
                    />
                ))}
            </div>
            {items.length === 0 && (
                <div className="text-center text-sm text-muted-foreground mt-10">
                    No courses found
                </div>
            )}
        </div>
    )
}