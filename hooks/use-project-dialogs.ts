"use client"

import { useState } from "react"

export interface Project {
  id: string
  name: string
  slug: string
  isOwned: boolean
}

export type DialogState =
  | { type: "none" }
  | { type: "create" }
  | { type: "rename"; project: Project }
  | { type: "delete"; project: Project }

const MOCK_PROJECTS: Project[] = [
  { id: "1", name: "E-Commerce Platform", slug: "e-commerce-platform", isOwned: true },
  { id: "2", name: "Dashboard Redesign", slug: "dashboard-redesign", isOwned: true },
  { id: "3", name: "Mobile API", slug: "mobile-api", isOwned: false },
  { id: "4", name: "Design System", slug: "design-system", isOwned: false },
]

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function validateSlug(trimmedName: string): string | null {
  return toSlug(trimmedName).length === 0
    ? "Name must contain at least one letter or number."
    : null
}

export function useProjectDialogs() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)
  const [dialog, setDialog] = useState<DialogState>({ type: "none" })
  const [name, setNameRaw] = useState("")
  const [slugError, setSlugError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const slug = toSlug(name)

  function setName(value: string) {
    if (slugError) setSlugError("")
    setNameRaw(value)
  }

  function openCreateDialog() {
    setNameRaw("")
    setSlugError("")
    setDialog({ type: "create" })
  }

  function openRenameDialog(project: Project) {
    setNameRaw(project.name)
    setSlugError("")
    setDialog({ type: "rename", project })
  }

  function openDeleteDialog(project: Project) {
    setDialog({ type: "delete", project })
  }

  function closeDialog() {
    setDialog({ type: "none" })
  }

  function handleCreate() {
    const trimmed = name.trim()
    if (!trimmed) return
    const error = validateSlug(trimmed)
    if (error) { setSlugError(error); return }
    setIsLoading(true)
    const newProject: Project = {
      id: Date.now().toString(),
      name: trimmed,
      slug: toSlug(trimmed),
      isOwned: true,
    }
    setProjects((prev) => [newProject, ...prev])
    setIsLoading(false)
    closeDialog()
  }

  function handleRename() {
    const trimmed = name.trim()
    if (!trimmed || dialog.type !== "rename") return
    const error = validateSlug(trimmed)
    if (error) { setSlugError(error); return }
    setIsLoading(true)
    const targetId = dialog.project.id
    setProjects((prev) =>
      prev.map((p) =>
        p.id === targetId ? { ...p, name: trimmed, slug: toSlug(trimmed) } : p
      )
    )
    setIsLoading(false)
    closeDialog()
  }

  function handleDelete() {
    if (dialog.type !== "delete") return
    setIsLoading(true)
    const targetId = dialog.project.id
    setProjects((prev) => prev.filter((p) => p.id !== targetId))
    setIsLoading(false)
    closeDialog()
  }

  return {
    projects,
    dialog,
    name,
    slug,
    slugError,
    isLoading,
    setName,
    openCreateDialog,
    openRenameDialog,
    openDeleteDialog,
    closeDialog,
    handleCreate,
    handleRename,
    handleDelete,
  }
}
