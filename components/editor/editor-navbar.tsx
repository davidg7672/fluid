"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
}

export function EditorNavbar({ isSidebarOpen, onSidebarToggle }: EditorNavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-12 items-center border-b border-border bg-background">
      <div className="flex items-center px-2">
        <Button variant="ghost" size="icon" onClick={onSidebarToggle} aria-label="Toggle sidebar">
          {isSidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-2 px-2">
        <UserButton />
      </div>
    </header>
  )
}
