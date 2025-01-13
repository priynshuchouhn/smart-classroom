import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

import { IconBadge } from "@/components/ui/icon-badge";

interface ModuleCardProps {
  id: string;
  title: string;
  subject: string;
};

export const ModuleCard = ({
  id,
  title,
  subject
}: ModuleCardProps) => {
  return (
    (<Link href={`/modules/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image
            fill
            className="object-cover"
            alt={title}
            src={"https://images.unsplash.com/photo-1556888335-23631cd2801a?q=80&w=2906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition  dark:group-hover:text-sky-500  line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">
            {subject}
          </p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size="sm" icon={BookOpen} />
            </div>
          </div>
        </div>
      </div>
    </Link>)
  );
}