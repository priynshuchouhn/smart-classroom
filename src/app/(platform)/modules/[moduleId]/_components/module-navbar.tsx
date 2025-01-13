import {  Module,  Profile } from "@prisma/client"

import { NavbarRoutes } from "@/components/ui/navbar-routes";

import { ModuleMobileSidebar } from "./module-mobile-sidebar";
import { SafeProfile } from "@/types";

interface CourseNavbarProps {
  module: Module 
  currentProfile?: SafeProfile | null;
};


export const CourseNavbar = ({
  module,
  currentProfile
}: CourseNavbarProps) => {

  return (

      <div className="p-4 border-b h-full flex items-center  shadow-sm">
        <ModuleMobileSidebar
          module={module}
        />
        <NavbarRoutes currentProfile={currentProfile} />      
      </div>

  )
}