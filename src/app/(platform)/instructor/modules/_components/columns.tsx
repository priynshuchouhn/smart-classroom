"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Module } from "@prisma/client"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Pencil } from "lucide-react"
import Link from "next/link"


export const columns: ColumnDef<Module>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "subject.name",
    header: "Subject",
  },
  {
    header: "Published",
    accessorKey: "isPublished",
    cell: ({row}) => {
      const isPublished = row.getValue("isPublished") || false;
      return (
        <Badge className={cn(
          "bg-slate-500",
          isPublished && "bg-sky-700"
        )}>
          {isPublished ? "Published" : "Draft"}
        </Badge>
      )
    },
  },{
    id: "actions",
    cell: ({row}) => {
      const {moduleId} = row.original

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
