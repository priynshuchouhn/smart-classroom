"use client"

import { Course } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "subject.name",
    header: "Subject",
  },
  {
    accessorKey: "isPublished",
    header: "Published",
  },
]
