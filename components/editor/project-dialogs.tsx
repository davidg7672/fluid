"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { DialogState } from "@/hooks/use-project-dialogs"

interface ProjectDialogsProps {
  dialog: DialogState
  name: string
  slug: string
  slugError: string
  isLoading: boolean
  setName: (name: string) => void
  closeDialog: () => void
  handleCreate: () => void
  handleRename: () => void
  handleDelete: () => void
}

export function ProjectDialogs({
  dialog,
  name,
  slug,
  slugError,
  isLoading,
  setName,
  closeDialog,
  handleCreate,
  handleRename,
  handleDelete,
}: ProjectDialogsProps) {
  return (
    <>
      <Dialog
        open={dialog.type === "create"}
        onOpenChange={(open) => { if (!open) closeDialog() }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Project</DialogTitle>
            <DialogDescription>
              Give your architecture workspace a name.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Project name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
              aria-invalid={!!slugError}
              autoFocus
            />
            {slugError ? (
              <p className="text-xs text-destructive">{slugError}</p>
            ) : slug ? (
              <p className="text-xs text-muted-foreground">
                Slug: <span className="font-mono">{slug}</span>
              </p>
            ) : null}
          </div>
          <DialogFooter>
            <Button onClick={handleCreate} disabled={!name.trim() || isLoading}>
              Create Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={dialog.type === "rename"}
        onOpenChange={(open) => { if (!open) closeDialog() }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Project</DialogTitle>
            {dialog.type === "rename" && (
              <DialogDescription>
                Renaming &ldquo;{dialog.project.name}&rdquo;
              </DialogDescription>
            )}
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Project name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleRename()}
              aria-invalid={!!slugError}
              autoFocus
            />
            {slugError && (
              <p className="text-xs text-destructive">{slugError}</p>
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleRename} disabled={!name.trim() || isLoading}>
              Rename
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={dialog.type === "delete"}
        onOpenChange={(open) => { if (!open) closeDialog() }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Project</DialogTitle>
            {dialog.type === "delete" && (
              <DialogDescription>
                This will permanently delete &ldquo;{dialog.project.name}&rdquo;. This action cannot be undone.
              </DialogDescription>
            )}
          </DialogHeader>
          <DialogFooter>
            <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
              Delete Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
