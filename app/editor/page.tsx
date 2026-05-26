"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useProjectContext } from "@/lib/project-context"

export default function EditorPage() {
  const { openCreateDialog } = useProjectContext()

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-lg font-medium">Create a project or open an existing one</h1>
      <p className="text-sm text-muted-foreground">
        Start a new architecture workspace, or choose a project from the sidebar.
      </p>
      <Button className="mt-2 gap-2" onClick={openCreateDialog}>
        <Plus />
        New Project
      </Button>
    </div>
  )
}
