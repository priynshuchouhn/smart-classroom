import { IconBadge } from "@/components/ui/icon-badge";
import { db } from "@/lib/db";
import {  LayoutDashboard, Notebook } from "lucide-react";
import { redirect } from "next/navigation";
import Banner from "@/components/ui/banner";
import Actions from "./_components/action";
import NameForm from "./_components/name-form";
import ModuleList from "./_components/modules-list";
async function Page({ params }: { params: { subjectId: string } }) {
    // TODO: Add User Id here, if using clerk
    const { user_id } = { user_id: "Hello world" };
    if (!user_id) return redirect('/instructor/subjects');
    const subject = await db.subject.findUnique({
        where: {
            subjectId: params.subjectId
        },include:{
            modules : {
                orderBy: {
                    createdAt: "desc"
                }
            }
        }
    })
    if (!subject) return redirect('/instructor/subjects');
    const requiredFields = [
        subject.name,
        // course.description,
        // course.isPublished,
        // course.attachments.length > 0
    ]
    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;
    const completionText = `(${completedFields}/${totalFields})`

    const isCompleted = requiredFields.every(Boolean)
    return (
        <>
        {!subject.isActive && (
            <Banner 
            label={"This subject is inactive. All modules will not be visible"}
            />
        )}
        <div className="p-6">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">
                        Subject Setup
                    </h1>
                    <span className="text-sm text-slate-700">
                        Complete all Fields {completionText}
                    </span>
                </div>
                <Actions
                disabled={!isCompleted}
                subjectId={params.subjectId}
                isActive={subject.isActive}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div className="col-span-2 mb-1">
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard} />
                        <h2 className="text-xl">
                            Customize your subject
                        </h2>
                    </div>
                    <NameForm
                        initialData={subject}
                        subjectId={subject.subjectId}
                    />
                </div>
                <div className="col-span-2 mb-3">
                <div className="flex items-center gap-x-2">
                        <IconBadge icon={Notebook} />
                        <h2 className="text-xl">
                            All Modules
                        </h2>
                    </div>
                    <ModuleList
                    initialData={subject.modules}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Page;