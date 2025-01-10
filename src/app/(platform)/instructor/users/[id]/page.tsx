import React from "react";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import Link from "next/link";
import { ArrowLeft, LayoutDashboard, Eye, Video } from "lucide-react";
import { IconBadge } from "@/components/ui/icon-badge";
import { ImageForm } from "./_components/image-form";
import { MemberRoleForm } from "./_components/member-role-form";

interface ProfileIdPageProps {
  params: {
    id: string;
  };
}

const ProfileIdPage: React.FC<ProfileIdPageProps> = async ({ params }) => {
  const { id } = params;
  const session = {userId: 'Hello world'};
  const currentUserId = session?.userId;

  if (!currentUserId) {
    return redirect("/instructor/users/");
  }

  const profile = await db.profile.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!profile) {
    return redirect("/instructor/users/");
  }

  return (
    <div className="flex-1 p-6">
      <MemberRoleForm initialData={profile} id={profile.id} />
    </div>
  );
};

export default ProfileIdPage;