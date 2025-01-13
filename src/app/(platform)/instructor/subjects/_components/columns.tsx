"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Subject } from "@prisma/client"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Pencil } from "lucide-react"
import Link from "next/link"


export const columns: ColumnDef<Subject>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "modules",
    header: "Modules",
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
