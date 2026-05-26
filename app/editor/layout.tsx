"use client"

import { useState } from "react"
import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"
import { ProjectDialogs } from "@/components/editor/project-dialogs"
import { useProjectDialogs } from "@/hooks/use-project-dialogs"
import { ProjectContext } from "@/lib/project-context"

export default function EditorLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const dialogs = useProjectDialogs()

  return (
    <ProjectContext.Provider value={{ openCreateDialog: dialogs.openCreateDialog }}>
      <div className="relative flex h-screen flex-col overflow-hidden">
        <EditorNavbar
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={() => setIsSidebarOpen((prev) => !prev)}
        />
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          projects={dialogs.projects}
          onCreateProject={dialogs.openCreateDialog}
          onRenameProject={dialogs.openRenameDialog}
          onDeleteProject={dialogs.openDeleteDialog}
        />
        <main className="flex flex-1 flex-col overflow-hidden pt-12">
          {children}
        </main>
        <ProjectDialogs
          dialog={dialogs.dialog}
          name={dialogs.name}
          slug={dialogs.slug}
          slugError={dialogs.slugError}
          isLoading={dialogs.isLoading}
          setName={dialogs.setName}
          closeDialog={dialogs.closeDialog}
          handleCreate={dialogs.handleCreate}
          handleRename={dialogs.handleRename}
          handleDelete={dialogs.handleDelete}
        />
      </div>
    </ProjectContext.Provider>
  )
}
