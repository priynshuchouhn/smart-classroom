import { redirect } from "next/navigation";
import { File } from "lucide-react";

import { getModule } from "@/actions/get-module";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/ui/preview";


const ChapterIdPage = async ({
  params
}: {
  params: { moduleId: string; }
}) => {
  
  const {
    moduleData,
    attachments,
    userProgress,
  } = await getModule({
    moduleId: params.moduleId,
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
      {!!attachments.length && (
        <>
          <Separator />
          <div className="p-4">
            {attachments.map((attachment) => (
              <a
                href={attachment.url}
                target="_blank"
                key={attachment.attachmentId}
                className='flex items-center p-3 w-full bg-sky-200 dark:bg-sky-800 text-sky-700 dark:text-sky-300 hover:underline'
              >
                <File className="mr-2" />
                <p className="line-clamp-1">
                  {attachment.name}
                </p>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ChapterIdPage;