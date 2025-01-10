import {  Course,  Profile } from "@prisma/client"

import { NavbarRoutes } from "@/components/ui/navbar-routes";

import { CourseMobileSidebar } from "./course-mobile-sidebar";
import { SafeProfile } from "@/types";

interface CourseNavbarProps {
  course: Course 
  currentProfile?: SafeProfile | null;
};


export const CourseNavbar = ({
  course,
  currentProfile
}: CourseNavbarProps) => {

  return (

      <div className="p-4 border-b h-full flex items-center  shadow-sm">
        <CourseMobileSidebar
          course={course}
        />
        <NavbarRoutes currentProfile={currentProfile} />      
      </div>

  )
}