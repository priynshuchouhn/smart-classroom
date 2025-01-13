import {  Module  } from "@prisma/client"
import { redirect } from "next/navigation";



interface ModuleSidebarProps {
  module: Module 
};

export const ModuleSidebar = async ({
  module,
}: ModuleSidebarProps) => {
  const { userId } = {userId: "Hello world"}

  if (!userId) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto border-r shadow-sm">
      <div className="flex flex-col p-8 border-b">
        <h1 className="font-semibold">
          {module.title}
        </h1>
      </div>
    </div>
  )
}