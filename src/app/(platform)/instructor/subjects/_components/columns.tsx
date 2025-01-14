"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Module, Subject } from "@prisma/client"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Pencil } from "lucide-react"
import Link from "next/link"

type SubjectWithModules = Subject & {modules: Module[]}

export const columns: ColumnDef<SubjectWithModules>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "modules",
    header: "Modules",
    cell: ({row}) => {
      const { modules } = row.original

      return modules.length
    }
  },
  {
    id: "actions",
    cell: ({row}) => {
      const {subjectId} = row.original

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
            <Link href={`/instructor/subjects/${subjectId}`} className="flex items-center">
              <Pencil className="h-4 w-4 mr-2"/>
              Edit
            </Link>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
