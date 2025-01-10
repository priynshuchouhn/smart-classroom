import { IconBadge } from "@/components/ui/icon-badge";
import { db } from "@/lib/db";
import { Files, LayoutDashboard, ListCheck } from "lucide-react";
import { redirect } from "next/navigation";
import TitleForm from "./_components/title-form";
import DescriptionForm from "./_components/description-form";
import SubjectForm from "./_components/subject-form";
import AttachmentForm from "./_components/attachment-form";
import Banner from "@/components/ui/banner";
import Actions from "./_components/action";
async function Page({ params }: { params: { courseId: string } }) {
    // TODO: Add User Id here, if using clerk
    const { user_id } = { user_id: "Hello world" };
    if (!user_id) return redirect('/instructor/courses');
    const course = await db.course.findUnique({
        where: {
            course_id: params.courseId
        },include:{
            attachments : {
                orderBy: {
                    createdAt: "desc"
                }
            }
        }
    })
    if (!course) return redirect('/instructor/courses');
    const subject = await db.subject.findMany({
        orderBy: {
            name: "asc"
        }
    })
    const requiredFields = [
        course.title,
        // course.description,
        // course.isPublished,
        course.subject_id,
        // course.attachments.length > 0
    ]
    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;
    const completionText = `(${completedFields}/${totalFields})`

    const isCompleted = requiredFields.every(Boolean)
    return (
        <>
        {!course.isPublished && (
            <Banner 
            label={"This course is unpublished. it will not be visible to the students."}
            />
        )}
        <div className="p-6">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">
                        Course Setup
                    </h1>
                    <span className="text-sm text-slate-700">
                        Complete all Fields {completionText}
                    </span>
                </div>
                <Actions
                disabled={!isCompleted}
                courseId={params.courseId}
                isPublished={course.isPublished}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard} />
                        <h2 className="text-xl">
                            Customize your course
                        </h2>
                    </div>
                    <TitleForm
                        initialData={course}
                        courseId={course.course_id}
                    />
                    <DescriptionForm
                        initialData={course}
                        courseId={course.course_id}
                    />
                    <SubjectForm
                        initialData={course}
                        options={subject.map((subject) => ({
                            label: subject.name,
                            value: subject.subject_id
                        }))}
                        courseId={course.course_id}
                    />
                </div>
                <div className="space-y-6">
                    {/* <div>
                        <div className="flex items-center gap-x-2">
                            <IconBadge icon={ListCheck} />
                            <h2 className="text-xl">Course Chapter</h2>
                        </div>
                        <div> Todo: Chapters</div>
                    </div> */}
                    <div>
                        <div className="flex items-center gap-x-2">
                            <IconBadge icon={Files} />
                            <h2 className="text-xl">Resources & Attachments</h2>
                        </div>
                        <AttachmentForm
                        initialData={course}
                        courseId={course.course_id}
                    />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Page;