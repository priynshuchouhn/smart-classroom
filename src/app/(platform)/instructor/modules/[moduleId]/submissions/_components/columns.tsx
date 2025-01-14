"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Module, StudentAttachment } from "@prisma/client"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { Lock, MoreHorizontal, Pencil } from "lucide-react"
import Link from "next/link"


export const columns: ColumnDef<StudentAttachment>[] = [
  {
    accessorKey: "studentId",
    header: "Student Name",
  },
  {
    accessorKey: "createdAt",
    header: "Submitted At",
    cell: ({row}) => {
      const {createdAt} = row.original
      return <p>{createdAt.toLocaleString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Ensures 24-hour format
    })}</p>
    }
  },
  {
    accessorKey: "url",
    header: "File",
    cell: ({row}) => {
      const {url} = row.original;
      return (<Link target="_blank" className="underline text-sky-700 font-semibold" href={url}>View</Link>)
    }
  },
  {
    id: "actions",
    cell: ({row}) => {
      const {moduleId, submissionId} = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'ghost'} className="h-4 w-8 p-0">
                <span className="sr-only">Open Menu</span>
                <MoreHorizontal/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={`/instructor/modules/${moduleId}`} className="flex items-center">
              <Lock className="h-4 w-4 mr-2"/>
              Lock
            </Link>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
