import { db } from "@/lib/db";
import { SafeProfile } from "@/types";
import { redirect } from "next/navigation";

export default async function getSafeProfile() {
  try {

    const { user_id } = {user_id: "Hello world"};

    if (!user_id) {
        return redirect("/dashboard");
    }

    const currentProfile = await db.profile.findUnique({
        where: {
          userId:user_id,
        },
        select: {
          id: true,
          userId: true,
          name: true,
          imageUrl: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      
      if (!currentProfile) {
        return null;
      }
      
      // Convert createdAt and updatedAt to ISO strings
      const safeProfile: SafeProfile = {
        ...currentProfile,
        createdAt: currentProfile.createdAt.toISOString(),
        updatedAt: currentProfile.updatedAt.toISOString(),
      };

        // currentProfile is passed to client component and client components
        // can only pass stringified JSON objects. So we need to convert   
        // Date objects to ISO strings.
        // The ... operator is used to copy all properties from currentProfile
        // to a new object. We then overwrite the createdAt, updatedAt and
        // emailVerified properties with their ISO string values.
    return safeProfile;
  } catch (error) {
    return null;
  }
}

