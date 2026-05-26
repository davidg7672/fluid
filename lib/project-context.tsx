"use client"

import { createContext, useContext } from "react"

interface ProjectContextValue {
  openCreateDialog: () => void
}

export const ProjectContext = createContext<ProjectContextValue | null>(null)

export function useProjectContext() {
  const ctx = useContext(ProjectContext)
  if (!ctx) throw new Error("useProjectContext must be used inside EditorLayout")
  return ctx
}
