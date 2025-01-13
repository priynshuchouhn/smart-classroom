import { Subject, Module, Profile } from "@prisma/client";

export type ModuleWithProgressWithSubject = Module & {
    subject: Subject | null;
};

export type SafeProfile = Omit<
  Profile,
  "createdAt" | "updatedAt" 
> & {
  createdAt: string;
  updatedAt: string;
};
