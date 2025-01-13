import { Menu } from "lucide-react";
import {  Module, } from "@prisma/client";

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

import { ModuleSidebar } from "./module-sidebar";

interface ModuleMobileSidebarProps {
  module: Module 
};

export const ModuleMobileSidebar = ({ 
  module,
}: ModuleMobileSidebarProps) => {

  
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0  w-72">
        <ModuleSidebar
          module={module}
        />
      </SheetContent>
    </Sheet>
  )
}