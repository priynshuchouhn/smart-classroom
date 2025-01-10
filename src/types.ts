import { Subject, Course, Profile } from "@prisma/client";

export type CourseWithProgressWithSubject = Course & {
    subject: Subject | null;
};

export type SafeProfile = Omit<
  Profile,
  "createdAt" | "updatedAt" 
> & {
  createdAt: string;
  updatedAt: string;
};
