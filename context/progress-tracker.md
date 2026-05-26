# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase
- Feature 04 (Project Dialogs) — complete

## Current Goal
- Feature 04 (Project Dialogs)

## Completed

- Feature 01: Design System — shadcn/ui installed and configured for Tailwind v4, dark-only theme tokens in globals.css, Button/Card/Dialog/Input/Tabs/Textarea/ScrollArea components added to components/ui/, lucide-react installed, lib/utils.ts cn() helper in place. TypeScript compiles clean.
- Feature 02: Editor Chrome — EditorNavbar (fixed top bar, sidebar toggle with PanelLeftOpen/PanelLeftClose, left/center/right sections) and ProjectSidebar (floating overlay, slides in from left, Tabs with My Projects/Shared, New Project button) created in components/editor/. Dialog pattern already satisfied by existing components/ui/dialog.tsx. TypeScript compiles clean.
- Feature 03: Auth — ClerkProvider wraps root layout with dark theme from @clerk/ui/themes. proxy.ts protects all routes except /sign-in and /sign-up. Two-panel auth pages (left: logo/tagline/feature list, right: Clerk form; small screens: form only). Root page redirects authenticated users to /editor, unauthenticated to /sign-in. UserButton in EditorNavbar right section. Build passes clean.
- Feature 04: Project Dialogs — editor home screen with heading/description/New Project button, Create/Rename/Delete dialogs (slug preview, auto-focus, destructive confirm), sidebar project items with hover-reveal rename/delete actions (owned only), mobile backdrop scrim, useProjectDialogs hook with mock data, ProjectContext for cross-component access. TypeScript and lint clean.

## In Progress

- None.

## Next Up
- Feature 05 (TBD)



## Open Questions

- None yet.

## Architecture Decisions

- shadcn/ui over Tailwind v4 (CSS-based token config via @theme inline in globals.css, no tailwind.config.js).
- Dark-only theme: all shadcn :root variables set to dark values directly — no .dark class switching.
- Do not modify generated components/ui/* files after shadcn installation.
- Next.js 16 uses proxy.ts (not middleware.ts) — same API, renamed to reflect its purpose.

## Session Notes

- Using Next.js 16.2.6 with React 19 and Tailwind CSS v4.
- shadcn ^4.8.0 was used; it auto-detected Tailwind v4.
- lucide-react ^1.16.0 installed (pulled in by shadcn init).
