import { redirect } from "next/navigation";
import { File } from "lucide-react";

import { getModule } from "@/actions/get-module";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/ui/preview";
import { cn } from "@/lib/utils";
import StudentSubmissionForm from "./_components/student-submission-form";


const ModuleIdPage = async ({
  params
}: {
  params: { moduleId: string; }
}) => {
  const {userId} = {userId: "Hello world"}
  const {
    moduleData,
    attachments,
    assignment,
    studentSubmission,
    userProgress,
  } = await getModule({
    moduleId: params.moduleId,
    userId
  });
  if (!moduleData) {
    return redirect("/dashboard")
  }



  return (
    <div>
      <div className="p-4 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold mb-2">
          {moduleData.title}
        </h2>
      </div>
      {moduleData.description && moduleData.description.length > 0 && (
        <>
          <Separator />
          <div>
            <Preview value={moduleData.description!} />
          </div>
        </>
      )}
      <Separator />
      <div className={cn("grid grid-cols-1", `${attachments.length > 0 ? 'md:grid-cols-3' : 'md:grid-cols-1'}`)}>
        {!!attachments.length && (
          <div className="p-4 col-span-2">
            <h4 className="mb-3 font-semibold">Module Resources</h4>
            {attachments.map((attachment) => (
              <a
                href={attachment.url}
                target="_blank"
                key={attachment.attachmentId}
                className='flex items-center p-3 w-full rounded-md bg-sky-200 dark:bg-sky-800 text-sky-700 dark:text-sky-300 hover:underline'
              >
                <File className="mr-2" />
                <p className="line-clamp-1">
                  {attachment.name}
                </p>
              </a>
            ))}
          </div>
        )}
        {!!assignment.length && (
          <div>
            <div className="p-4">
              <h4 className="mb-3 font-semibold">Module Assignments</h4>
              {assignment.map((item) => (
                <a
                  href={item.url}
                  target="_blank"
                  key={item.assignmentId}
                  className='flex items-center p-3 w-full bg-green-200 dark:bg-sky-800 rounded-md text-green-700 dark:text-sky-300 hover:underline'
                >
                  <File className="mr-2" />
                  <p className="line-clamp-1">
                    {item.name}
                  </p>
                </a>
              ))}
            </div>
            <div className="p-4">
              <h4 className="mb-3 font-semibold">Module Submission</h4>
              <StudentSubmissionForm
              moduleId={moduleData.moduleId}
              initialData={studentSubmission}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModuleIdPage;